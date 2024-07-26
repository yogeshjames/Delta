import { useState,useEffect} from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from "react-icons/ai"
import Header from './Header.jsx'
import axios from 'axios';
import Card from './Card.jsx'
import Audio from './Audioplayer/Audio.jsx'
function Songs(){

    const [songs, setsongs] = useState("Hello");
  const [s, setS] = useState([]);
  const [token, setToken] = useState("");
  const [playing, setPlaying] = useState(null);
  const [isuser,setisuser]=useState(false);
  const [who,setwho]=useState("songs");//for name diplaying
  const[user,setuser]=useState("")//to type the user
  const[theuser,settheuser]=useState();//get the object of the user typed
   const [sent, setsent]=useState("")
   const userId = window.localStorage.getItem('id');
   const [recom,setrecom]=useState([]);

  useEffect(() => {
    const fetchToken = async () => {
      console.log(1)
      try {
        const response = await axios.post('http://localhost:3000/get-token');
        setToken(response.data.access_token);
        window.localStorage.setItem("token",response.data.access_token)
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  useEffect(()=>{
    const fetchuser= async ()=>{
 try{
   if(user!==window.localStorage.getItem('name')){//cant type ur name itself
     const res = await axios.get('http://localhost:3000/giveuser',{params:{user}});
     if(res.status==200){settheuser(res.data);}///set only if they find the user
     else{
       console.log(res.data.message);
       settheuser('')
     }
   }
 }catch(err){
  console.log(err)
 }}
 if(isuser)fetchuser();
   },[user])
 


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchWithRetry = async (url, options, retries = 5, delayTime = 1000) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    if (retries > 0 && error.response && error.response.status === 429) {
      await delay(delayTime);
      return fetchWithRetry(url, options, retries - 1, delayTime * 2); // Exponential backoff
    } else {
      throw error;
    }
  }
};


  useEffect(() => {
    const fetchSongs = async () => {
      if (token) {
        try {
          const response = await axios.get('https://api.spotify.com/v1/search', {
            headers: {
              Authorization: `Bearer ${token}`
            },
            params: {
              q: `${songs}`,
              type: 'track',
              limit: 7 // Adjust the limit as
            }
          });
         
          console.log(response.data.tracks.items)
          setS(response.data.tracks.items);


          ///RECOMMANDATIONS
          try{
          const x=await axios.get('http://localhost:3000/recommandation',{params:{id:userId}});
          console.log(x.data);
          const res =  await axios.get(`https://api.spotify.com/v1/recommendations?seed_artists=${x.data?.artistid}&seed_tracks=${x.data?.id}`,{
            headers: {
              Authorization: `Bearer ${token}` 
            }});/// for spotify
            console.log(res.data.tracks);
            setrecom(res.data.tracks);}
            catch(error){
               console.log(error)
            }
            /////
        } catch (error) {
          console.error('Error fetching songs:', error);
        }
      }
    };
    console.log(s)
    fetchSongs();
  }, [token , songs]);




  const sendrequest = async () => {
    console.log(1)
    try {
      const response = await axios.post('http://localhost:3000/sendrequest', {
        senderid: window.localStorage.getItem('id'),
        receiverid: theuser.id,
      });
      console.log(response.data.message);
      setsent("friend request sent")
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };
  
    return (
        <>
          <Header />
          <div className="w-full p-4 flex items-center">
            <div className="w-full flex justify-center">
              <div className="relative w-1/4">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl outline-none"
                  placeholder="Search Here"
                  value={isuser ? user :songs}
                  onChange={(e) => {
                    if(!isuser){
                    setsongs(e.target.value);
                 }
                    else{
                      setuser(e.target.value);
                      console.log(e.target.value);
                      setsent("")
                    }
                  }}
                />
               
                  <AiOutlineSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
                  onClick={() => {
                    setsongs('')
                }}/>
                
              </div>
              <button  className='border border-solid rounded-md font-serif  ml-3 h-6 text-amber-50 bg-black ' onClick={()=>{setisuser(!isuser)
                if(who==="songs"){
                  setwho("user");
                  console.log(isuser)
                }
                else{setwho("songs")}
              }}>{who}</button>
            </div>
            </div>
           {!isuser && <h1 className='absolute left-1/2 font-extrabold font-serif text-xl'>Songs:"{songs}"</h1>}
            <div className='flex mx-6 flex-wrap bg-slate-50 w-full rounded-md'>
            { !isuser && s.map((song) => (
        <Card key={song.id} song={song} is={(true)}  playSong={setPlaying}  />//passing index of the songs 
        ))}
      
        {!isuser &&<>
        <div className='flex mx-6 flex-wrap bg-slate-50 w-full rounded-md'>
        <h2 className=' font-semibold text-2xl'>Recommended Songs</h2>
          {recom.slice(0, 5).map(track => (
            // recommandation
            <Card key={track.id} song={track} is={(true)}  playSong={setPlaying}  />
          ))}
      </div>
      </>
      }
      
       {isuser && !theuser &&(
        <p> No Such user</p>///if u in users but no user is found
       )}
        {isuser && theuser &&(//only rende if we found the user
          <div className='flex flex-wrap border-2 border-solid border-gray-700  rounded-md my-8' >
             <h1 ><span className='font-serif font-extrabold'>Name:</span>{theuser.name}</h1>
             <p className='mx-5 '><span className='font-serif font-extrabold'> Email:</span>{theuser.email}</p>
             <button onClick={sendrequest} className='bg-black rounded-md text-gray-500 border-4 border-solid '>Add Friend</button>
           { sent&&  <p>{sent}</p>}
            </div>
        )}
         {playing && (
        <div className="fixed bottom-3 left-0 w-full ">
          <Audio src={playing} />
        </div>
      )}
      </div> 
        </>
      );
    }

export default Songs