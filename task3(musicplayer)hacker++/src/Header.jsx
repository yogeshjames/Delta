import { useState,useEffect} from 'react'
import React from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import musicIcon from './assets/music.png';
import { Link } from 'react-router-dom';


function Header() {
  const Navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    Navigate(path); // Navigate ,highlighting
  };

  return (
    <header className='flex bg-gray-300 w-full h-16 font-serif'>
      <img
        onClick={() => handleItemClick('Home', '/Home')}
        className='h-12 py-3 ml-5 w-8 absolute top-5'
        src={musicIcon}
        alt="music"
      />

      <ul className='flex space-x-20 ml-28 py-8'>
        <li
          onClick={() => handleItemClick('Home', '/Home')}
          className={`text-lg ${activeItem === 'Home' ? 'font-extrabold' : ''} cursor-pointer`}
        >
          Home
        </li>

        <li
          onClick={() => handleItemClick('Playlist', '/Playlist')}
          className={`text-lg ${activeItem === 'Playlist' ? 'font-extrabold' : ''} cursor-pointer`}
        >
          Playlist
        </li>

        <li
          onClick={() => handleItemClick('Liked', '/Liked')}
          className={`text-lg ${activeItem === 'Liked' ? 'font-extrabold' : ''} cursor-pointer`}
        >
          Liked
        </li>
        <li
          onClick={() => handleItemClick('Friends', '/Friends')}
          className={`text-lg ${activeItem === 'Friends' ? 'font-extrabold' : ''} cursor-pointer`}
        >
          Friends
        </li>
        <li
          onClick={() => handleItemClick('Artist', '/Artist')}
          className={`text-lg ${activeItem === 'Artist' ? 'font-extrabold' : ''} cursor-pointer`}
        >
          Artist Songs
        </li>

        <li
          onClick={() => handleItemClick('Stats', '/Stats')}
          className={`text-lg ${activeItem === 'Stats' ? 'font-extrabold' : ''} cursor-pointer`}
        >
          Stats
        </li>

      </ul>

      <h1 className='text-2xl absolute left-3/4'>
        <span className='ml-10 p-4 font-extrabold'>welcome! </span>
        {window.localStorage.getItem("name")}
      </h1>
      <button className='text-l relative left-1/3 px-15 top-5' onClick={()=>{
        window.localStorage.removeItem('auth')
        Navigate("/login");
      }}>
        Logout
      </button>
    </header>
  );
}

export default Header;
