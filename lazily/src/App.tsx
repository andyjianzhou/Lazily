import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/about';
import Card from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/Card'; //Make this dynamic
import Home from './pages/home';

const App: React.FC = () => {
  return (
    //Make the default landing page home
    <>
    {/* Route this to pages */}
    <div className = "App">
      <Router>
        <Navbar/>
        {/* Add hero section then add subscription page */}
        {/* <Home/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About />} /> 
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
