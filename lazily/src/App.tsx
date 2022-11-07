import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/about';
import Card from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/Card'; //Make this dynamic
import Home from './pages/home';
import './App.css';

function App() {
  return (
    //Make the default landing page home
    <>
    <body>

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} /> 
        </Routes>
      </Router>
    </body>
    </>
  );
}

export default App;
