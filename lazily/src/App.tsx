import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

import Card from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/Card'; //Make this dynamic
import HomePage from './pages/homeMain';

const App: React.FC = () => {
  return (
    //Make the default landing page home
    <>
    {/* Route this to pages */}
    <div className = "App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
