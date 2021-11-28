// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Textarea from './components/Textarea';

import Home from './components/Home';


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [textmode, settextmode] = useState('light');
  const [mode, setMode] = useState('light');
  // const [back, setback] = useState('light');
 
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      settextmode('dark');
      // setback('light');
      document.body.style.backgroundColor='#110c30';
    }else{
      setMode('light');
      settextmode('light');
      document.body.style.backgroundColor=" rgba(206, 235, 251, 1)";

    }
  }
  
  return (
    <>    
    <BrowserRouter>
    <Navbar toggleMode={toggleMode} mode= {mode}/>
      <Routes>
        <Route path="" element={<Home textmode={textmode}/>} />
        <Route path="/" element={<Home textmode={textmode}/>} />
        <Route path="/home" element={<Home textmode={textmode}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/textarea" element={<Textarea textmode={textmode}/>} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>        
    </>
  );
}

export default App;
 