import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/Button';
const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Button name="Test me" onClick={About}/>
        </div>
    );
};
export default About;