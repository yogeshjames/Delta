import { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams, useLocation } from 'react-router-dom';
import Header from './Header.jsx'

import axios from 'axios';
import Card from './Card.jsx';
import Audio from './Audioplayer/Audio.jsx';

function Artist(){

const [privsongs,setprivsongs]=useState([]);
const [playing, setPlaying] = useState(null);
useEffect(() => {
    const auth = window.localStorage.getItem("auth");
    if (auth === "false" || auth === null) {
      console.log(1);
      navigate("/login");
    }
  },[])

  useEffect( ()=>{
    const ll = async ()=>{
   try{
  const res= await axios.get('http://localhost:3000/getprivsongs')
  console.log(res.data);
  setprivsongs(res.data.songs);
  console.log(privsongs)}
  catch(errr){
    console.log(errr)
  }
    }
    ll();
  },[])
console.log(window.localStorage.getItem('artist'))
/// it is stored as a string 

  return (
    <>
    <Header></Header>
      <h1 className='text-2xl font-bold m-5'>Private Songs</h1>
{(window.localStorage.getItem('artist')=='true') &&(
  <div>
  <form>
    <input type="text" id="a" placeholder='Enter song name' ></input>
    <input type="text" id="b" placeholder='Enter artist Name' ></input>
    <input type="text"  id="c" placeholder='Enter mp3 link of song' ></input>
    <input type="text" id="d"  placeholder='Enter img source file' ></input>
    <p> All links shld be without quotes""</p>
    <button type="submit" className='text-white bg-black  rounded-md' onClick={ async ()=>{
       console.log(1);
     const song = document.getElementById('a').value;
     const artist = document.getElementById('b').value;
     const mp3 = document.getElementById('c').value;
     const img = document.getElementById('d').value;
    console.log(song)
const x={name:song,artist:artist,preview_url:mp3,image:img}///trying then catch instead of try ctyach
await axios.post('http://localhost:3000/uploadsong',
  x)
.then((response)=>{
  console.log(response);
    })
.catch((error)=>{
  console.log(error)
});
    }}>Upload</button>
 </form>
  </div>
)}

{privsongs.length !== 0 && (
    <div className='flex m-7 flex-wrap bg-slate-50 w-full rounded-md'>
      {privsongs.map((ele, index) => {
        console.log(ele);
       return( <Card key={index} song={ele} is={false} playSong={setPlaying} priv={true} />)
})}
    </div>
  )}

  {playing && (/// reACT NOT GIVE ERROR IF A  PROPS IS UNDEFINED IT WONR SHOW A ERROR JUST TAKE IT AS NULL.FALSE,UNDEFINED
    <div className="fixed bottom-3 left-0 w-full">
      <Audio src={playing}  priv={true}/>
    </div>
  )}
  </>
)
}

export default Artist;