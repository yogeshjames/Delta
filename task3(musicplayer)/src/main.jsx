import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Playlists from './Playlists.jsx'
import './index.css'
import Login from './Login.jsx'
import Register from './Register.jsx'
import { BrowserRouter,Routes,  Route} from 'react-router-dom'
import Liked from './Liked.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/*' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Liked' element={<Liked/>} />
      <Route path='/Playlist' element={<Playlists/>} />
      <Route path='/Home' element={<App/>} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
