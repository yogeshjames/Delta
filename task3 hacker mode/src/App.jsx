import { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams, useLocation } from 'react-router-dom';
import Header from './Header.jsx'
import Songs from './Songs.jsx'
import Liked from './Liked.jsx'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(1)
 
const navigate = useNavigate();
useEffect(() => {
  const auth = window.localStorage.getItem("auth");
  if (auth === "false" || auth === null) {
    console.log(1);
    navigate("/login");
  }
},[])

  return (
   <>
  <div> 
    <Songs/>
</div>
</>
  )
}
export default App
