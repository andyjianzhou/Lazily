import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../components/About/about';
import HeroPage from '../components/HeroSection';
import Home from '../components/Home/home';
import Navbar from '../components/Navbar';
// Re route into pages, and topple
import "../App.css"
const HomePage = () => {
    return (
        <div>
            {/* <Router> */}
                <div className = "gradient__bg">
                    <Navbar/> 
                </div>
                <HeroPage/>
                <Home/>
                <About/>
                {/* <Routes> */}
                    {/* <Route path="/" element={<HeroPage/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About />}/>  */}
                {/* </Routes> */}
            {/* </Router> */}
        </div>
    )
}
export default HomePage