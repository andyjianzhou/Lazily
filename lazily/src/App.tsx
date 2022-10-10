import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/about';
import Card from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/Card';
import Home from './pages/home';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />} /> 
      </Routes>
    </Router>
    <div>
        <Home></Home>
    </div>
    </>
  );
}

export default App;
