import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/Card'
import TextField from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/TextField'
// Learn how to make forms then feed it to python django backend
const Home = () => {
    const target = "https://www.youtube.com/watch?v=1Q8fG0TtVAY"
    return (
        <>

        <Card title="Home" description="This is the home page" children={
                <TextField title="Hello" placeholder="Email address..."/>
                }
            />
        </>
    )

}

export default Home;