import { useState,useEffect} from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from "react-icons/ai"
import Header from './Header.jsx'
import axios from 'axios';
import Card from './Card.jsx'
import { useNavigate } from 'react-router-dom'
import Cardplaylist from './Cardplaylist.jsx';
import Audio from './Audioplayer/Audio.jsx'
import { AiOutlineHeart, AiFillHeart, AiOutlinePlus } from 'react-icons/ai';
function Playlists(){
  const Navigate= useNavigate();
    const [name, setName] = useState("");
    const [what,setwhat]=useState("")
    const [partyplaylist, setpartyplaylist] = useState("");
    const [partyview, showparty] = useState(false);
    const [showform, setshowform] = useState(false);
    const [playlist, setallplaylist] = useState([]);
    const [show1 , set1]=useState(false);
    const [show2 ,set2]=useState(true);
    const [playing, setPlaying] = useState(null);
    const [currentindex, setindex]=useState();
    const [songsinplaylist ,setsongsinplaylist]=useState([])

    const navigate = useNavigate();
    useEffect(() => {
      const auth = window.localStorage.getItem("auth");
      if (auth === "false" || auth === null) {
        console.log(1);
        navigate("/login");
      }
    },[])

    function addplaylist(x) {
      if(name=="")return
          
          event.preventDefault();
          setshowform(!showform);
          navigate("/Playlist");
          console.log("Playlist name:", name);
        if(x===1){
          try{
            const res = axios.post('http://localhost:3000/newplaylist',{
            name:name,
            user:window.localStorage.getItem('id'),
            id:200 /// making id as 0 for all common playlist
          })
           console.log(res.data.message);
           setName("");
         //fetches the updated playlist
         
        }
        catch(err){
        }
      }
        else{///for private olaylist
          try{
            const res = axios.post('http://localhost:3000/newplaylist',{
            name:name,
            user:window.localStorage.getItem('id'),
            id:window.localStorage.getItem('id')//for private playlist im setting its id 
            
            //res.data here instead of res u ca n put any anme will give u things inside es.json
          })
           console.log(res.data.message);
         //fetches the updated playlist
         
        }
        catch(err){
        }
        }
}
function toggle1(){
    setshowform(!showform)
}

useEffect(()=>{

    async function call(){//get the playlists

      console.log(1)
try{
    const res=  await axios.get(`http://localhost:3000/playlists`,{params:{id:window.localStorage.getItem('id')}});
    console.log(res.data);
    setallplaylist(res.data);
    console.log(playlist) 
}
catch(err){

}
    }
    call();
    },[showform]
)

function toggle(){
    set1(!show1);
    set2(!show2);
    console.log(songsinplaylist);
    
}

function party(){
  showparty(!partyview)
}

async function addparty(){
  event.preventDefault();
const exists = playlist.some(ele => ele.name === partyplaylist);

if (exists && partyplaylist!=="party") {
  axios.post('http://localhost:3000/partymode', {
    partyplaylist
  })
  setwhat("added to party")
  setpartyplaylist("")
   showparty(!partyview)
  .then(response => {
console.log(response.status)
  })
  .catch(error => {
    console.error('Error adding playlist:', error);
  });
} else {
  console.log('Playlist not found.');
  setwhat("no such playlist")
}
  
}

function SongEnd(){
  console.log(currentindex);
  console.log(1)
  setPlaying(songsinplaylist[currentindex]);//current index has index of next song and this value is set upon clciking the card
  }

    return(
       <> 
       <Header/>
       
   { show2 && (<>
    <div className='flex flex-wrap '>
        {playlist.map((play)=>(
       <Cardplaylist key={play._id} mop={play} func={toggle} u={setsongsinplaylist}></Cardplaylist>
       //mop(playlist  object)
        ))}
       </div>
      <AiOutlinePlus className='cursor-pointer w-8 h-7 border-opacity-70 border-2  border-black border-solid rounded-sm' onClick={toggle1}/>
       <p> Add playlist</p>
        {showform && ( 
          
          <form className='border border-solid shadow-md rounded-sm  w-56' >
            <input 
              type="text"
              placeholder='Name of the playlist '
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className='flex justify-between border border-solid border-gray-600 bg-slate-950 text-neutral-100'>
            <button   type="submit" onClick={()=>{addplaylist(1)}}> Public</button>
            <button   type="submit" onClick={addplaylist}> PRivate</button>
        
            </div>
              </form>


        )}
        
        <h1 className='-top-12 relative m-4 left-56'>
          Party mode
        </h1>
        <AiOutlinePlus className='cursor-pointer  -top-28 relative left-56 w-8 h-7 border-opacity-70 border-2  border-black border-solid rounded-sm' onClick={party}/>
        {partyview && ( 
          
          <form className='  -top-24 relative left-56 border border-solid shadow-md rounded-sm  w-56' >
            <p>{what}</p>
            <input 
              type="text"
              placeholder='Name of the playlist u want to add to party'
              value={partyplaylist}
              onChange={(e) => setpartyplaylist(e.target.value)}
            />
            <div className='flex justify-between border border-solid border-gray-600 bg-slate-950 text-neutral-100'>
            <button   type="submit" onClick={addparty}> Add</button>
        
            </div>
              </form>


        )}
   
   
   
   
    </>)}

      {
        show1 && (
            <div className='flex mx-6 flex-wrap bg-slate-50 w-full rounded-md'>
            {console.log(songsinplaylist)}
            {songsinplaylist.map((song,index) => (
            <Card key={song.id} song={song} func={null} is={(false)} playSong={setPlaying} inc={setindex} index={index}/>))}
       </div>
        )
      }
      {playing  && (
        <div className="fixed bottom-3 left-0 w-full ">
          <Audio src={playing}  SongEnd={SongEnd}/>
        </div>
        //i can just export this songwnd function dierelctly to audioplayer but i hv to change evrwhere else //
      )}
        </>
    )
}

export default Playlists
