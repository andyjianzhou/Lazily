import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/Card'
import Form from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/Form'
// Learn how to make forms then feed it to python django backend
const Home = () => {
    // <TextField title="Hello" placeholder="Email address..." button={<button
    //     className="submit-Btn"
    //     type="submit"
    // >
    //     Submit
    // </button>}/>

    return (
        <>
        <div>
            <Card title="Home" description="This is the home page">
                <div className="p-5">
                    {
                    <Form title="Hello" 
                        placeholder="Email address..." 
                        button={<button
                        className="submit-Btn"
                        type="submit"
                    >
                        Submit
                    </button>}/>
                    }
                    <div>
                        Testing
                        </div>
                </div>
            </Card>
        </div>
        </>
    )

}

export default Home;