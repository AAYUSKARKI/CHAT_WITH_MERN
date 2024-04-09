import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Notfound from './components/Notfound';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
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
