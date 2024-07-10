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

  useEffect(() => {
    const fetchToken = async () => {
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
          setS(response.data.tracks.items);
        } catch (error) {
          console.error('Error fetching songs:', error);
        }
      }
    };

    fetchSongs();
  }, [token , songs]);

  
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
                  value={songs}
                  onChange={(e) => {
                    setsongs(e.target.value);
                  }}
                />
                <i
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-3xl cursor-pointer"
                  onClick={() => {
                    setsongs('')
                }}
                >
                  <AiOutlineSearch />
                </i>
              </div>
            </div>
            </div>
            <h1 className='absolute left-1/2 font-semibold font-serif'>Songs:"{songs}"</h1>
            <div className='flex mx-6 flex-wrap bg-slate-50 w-full rounded-md'>
            {s.map((song) => (
        <Card key={song.id} song={song} is={(true)}  playSong={setPlaying}  />//passing index of the songs
        
        ))}
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