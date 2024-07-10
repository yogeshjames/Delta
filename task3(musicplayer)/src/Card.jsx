import { useState, useEffect } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlinePlus } from 'react-icons/ai';
import axios from 'axios';

function Card({ song, func, is, playSong ,inc,index}) {
  const [likedsongs, setLikedsongs] = useState([]);
  const [liked, setLiked] = useState(false);
  const [showPlaylists, setShowPlaylists] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  console.log(song)
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        console.log(song);
        const res = await axios.get('http://localhost:3000/likedd', {
          params: { id: window.localStorage.getItem('id') },
        });
        const x = res.data.likedsongs;
        console.log(x);
        setLikedsongs(x);
        setLiked(x.includes(song.id));
      } catch (err) {
        console.log(err);
      }
    };
    fetchSongs();
    
  }, []);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const res = await axios.get('http://localhost:3000/playlistdetails');
        setPlaylists(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPlaylists();
  }, []);

  const handleLike = async () => {
    const userId = localStorage.getItem('id');
    
    if (!userId) {
      console.log('User is not logged in');
      return;
    }
    if (!liked) {
      setLiked(!liked);
      console.log(1);
      try {
        const response = await axios.post('http://localhost:3000/like', {
          userId: userId,
          songId: song.id,
        });

        if (response.status === 200) {
          console.log('Song liked successfully');
          setLikedsongs([...likedsongs, song.id]);
          return;
        } else {
          console.log('Failed to like song:', response.data.message);
        }
      } catch (error) {
        console.error('Error liking song:', error);
      }
    }

    if (liked) {
      setLiked(!liked);
      try {
        const response = await axios.post('http://localhost:3000/unlike', {
          userId: userId,
          songId: song.id,
        });

        if (response.status === 200) {
          console.log('Song unliked successfully');
          setLikedsongs((prev) => prev.filter((id) => id !== song.id));
          func(song.id);
          console.log(2)
          return;
        } else {
          console.log('Failed to unlike song:', response.data.message);
        }
      } catch (error) {
        console.error('Error unliking song:', error);
      }
    }
  };

  const addToPlaylist = () => {
    setShowPlaylists(!showPlaylists);
  };

  return (
    <div className="flex m-7">
      <div
        onClick={() => {playSong(song)
          if( inc){// check if i pass index that i sonly if its from playlist compoentn do this
            console.log(index)
          inc(++index)}
        }}
        className="card bg-slate-100 cursor-pointer button-hover-effect shadow-md rounded-md p-4 m-2 w-60"
      >
        <img src={song.album.images[0].url} alt={song.name} className="w-full h-40 object-cover rounded-md" />
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{song.name}</h2>
          <p className="text-gray-600">{song.artists[0].name}</p>
        </div>
        {is && (
          <div className="flex justify-between items-center mt-4">
            <button onClick={handleLike} className="text-red-500 text-2xl z-10">
              {liked ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
            <button onClick={addToPlaylist} className="text-blue-500 text-2xl">
              <AiOutlinePlus />
            </button>
          </div>
        )}
        {showPlaylists && (
          <div
            className="absolute mt-2 left-full w-full bg-white border border-gray-300 rounded-md shadow-lg z-10"
            onMouseLeave={addToPlaylist}
          >
            <ul>
              {playlists.map((playlist) => (//playlist is an object from my database this has all the playlists 
                <li
                  key={playlist._id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={async () => {
                    addToPlaylist();
                    axios.post('http://localhost:3000/addtoplaylist', {// upon clicking the playlist im making post requwst to dtatabse
                      id: playlist._id,
                      song: song,
                    });
                  }}
                >
                  {playlist.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
