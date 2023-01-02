import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../components/About/about';
import Home from '../components/Home/home';
import Navbar from '../components/Navbar';
// Re route into pages, and topple

const HomePage = () => {
    return (
        <div>
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
    )
}
export default HomePage