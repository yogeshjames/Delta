import React from 'react';
import axios from 'axios';
import './index.css'; // Ensure this CSS file contains the Tailwind directives
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
function Login() {
  window.localStorage.setItem("auth","false")
const  [cred,setcred]=useState({
  username:'',
  password:''
}
)
const navigate= useNavigate();
  const [heading,sethead]=useState("Login")
function onchange(e){

  const {name,value}=e.target//e.target has key value pairs
  setcred({...cred,[name]:value})
}



async function submit() {
  event.preventDefault();
  try {
    const response = await axios.get('http://localhost:3000/auth', {params: cred});
    console.log(response.data)
    if (response.status === 200 && response.data.success) {
      console.log('Login successful:', response.data);
      navigate({
        pathname: '/App'
      });
      window.localStorage.setItem("auth","true")
      window.localStorage.setItem("name",response.data.name)
      console.log(response.data.isartist)
      window.localStorage.setItem("artist",response.data.isartist)
      window.localStorage.setItem("id",response.data.id)
    } else {
      console.log('Login failed:', response.data);
      sethead("incorrect credantials")
    }
  } catch (error) {
    console.error('An error occurred during login:', error);
    sethead("incorrect credantials")
  }
}


  return  (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">{heading}</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              id='username'
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              onChange={onchange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id='password'
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              onChange={onchange}
            />
          </div>
          <div className="mb-4">
            <button onClick={submit}
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-sm">
          Don't have an account? <a href="/register" className="text-blue-500 hover:text-blue-800">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
