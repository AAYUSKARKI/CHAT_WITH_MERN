import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Notfound from './components/Notfound';
import Login from './components/Login';
import Signup from './components/Signup';
import {useSelector} from 'react-redux'
import { useEffect, useState } from 'react';
import io from 'socket.io-client'
function App() {
const [socket, setsocket] = useState(null)
  const {authuser}=useSelector(store=>store.user)
console.log(authuser)
  useEffect(()=>{
  const socket = io("http://localhost:7000/",{

  });
  setsocket(socket)
  console.log(socket)
  },[])
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='register' element={<Signup/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} /> {/* This route will match any path not defined above */}
      </Routes>
    </Router>
    <div className='p-4 h-screen flex items-center justify-center'>
      
    </div>
    </>
  );
}

export default App;
