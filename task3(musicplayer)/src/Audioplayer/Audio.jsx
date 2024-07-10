import React, { useEffect, useState } from "react";
import AudioPlayer from "./Audioplayer";
import axios from 'axios';

function Audio({ src, SongEnd }) {
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = `https://open.spotify.com/track/${src.id}`;
        const url = `https://itzpire.com/download/aio?url=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        const data = await response.json();
        setLink(data.data.download);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
       // setLoading(false);
      }
    };

    fetchData();
  }, [src.id]);

  if (loading) {
    return <p>Loading audio...</p>;
  }

  return (
    <div className="audio-player">
      <div className='audio-player p-4 bg-pink-200 rounded-lg shadow-lg flex items-center font-serif'>
        <img src={src.album.images[0].url} alt={src.name} className='w-20 h-20 object-cover rounded-md mr-4' />
        <div className='song-details'>
          {link ? <AudioPlayer src={link} next={SongEnd} /> : <p>No audio available</p>
          //chnage it to src.preview_url if u want 
          }
          <h2 className='text-xl font-bold'>{src.name}</h2>
          <h2 className='text-lg text-gray-700'>{src.artists[0].name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Audio;
