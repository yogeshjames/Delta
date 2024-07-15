import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx'


function Friends() {
  const [friendRequests, setFriendRequests] = useState([]);
  const [friends, setFriends] = useState([]);
  const userId = window.localStorage.getItem('id');
  const navigate = useNavigate();
  useEffect(() => {
    const requests = async () => {


      try {
        const response = await axios.get('http://localhost:3000/friendrequests', {
          params: { id:userId },
        });
        setFriendRequests(response.data.friendRequest);///friend request is an array now
      } catch (error) {
        console.error('Error fetching friend requests:', error);
      }
    };

    const fetchFriends = async () => {
      try {
        const response = await axios.get('http://localhost:3000/friends', {
          params: {id: userId },
        });
        setFriends(response.data.friends);
      } catch (error) {
        console.error('Error fetching friends:', error);
      }
    };

    requests();
    fetchFriends();
  }, [userId]);



  useEffect(() => {
    const auth = window.localStorage.getItem("auth");
    if (auth === "false" || auth === null) {
      console.log(1);
      navigate("/login");
    }
  },[])  

  const accept = async (senderId) => {
    try {
      const response = await axios.post('http://localhost:3000/acceptrequest', {
        receiverid: userId,
        senderid:senderId
      });
      console.log(response.data.message);
      setFriendRequests(friendRequests.filter(request => request.id !== senderId));//removing the accepted request 
      setFriends(response.data.friends);
    } catch (error) {
      console.error('Error accepting friend request:', error);
    }
  };

 

  return (
    <>
     <Header />
     
    <div className="flex w-full h-screen">
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Friend Requests</h2>
        <ul>
          {friendRequests.map((request) => (
            <li key={request.id} className="flex justify-between items-center mb-2">
              <p>{request.name}</p>
              <p>{request.email}</p>
              <div>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => accept(request.id)}//this is the senders id
                > Accept
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Friends</h2>
        <ul>
          {
          friends.map((friend) => (
            <li key={friend.id} className="mb-2 flex space-x-7">
             <p>Name:{friend.name}</p>
              <p>Email:{friend.email}</p> 
            </li>
          ))}
          {console.log(friends)}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Friends;
