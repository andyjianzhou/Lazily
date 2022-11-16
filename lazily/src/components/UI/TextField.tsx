import React, {useEffect, useState} from 'react';

import Button from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/Button';
import 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/styles.css'

//Rest API
import Axios from 'axios';

interface TextFieldProps {
    title: string
    placeholder: string
}

const TextField: React.FC<TextFieldProps> = ({title, placeholder}) => {

    const [inputFields, setInputFields] = useState([
        {email: ''}
    ]);
    const handleChangeForm = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        let value = [...inputFields];
        value[index].email = event.target.value;
        setInputFields(value);
        console.log(value)
    }

    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        Axios.post('http://localhost:3001/api/email', inputFields)
        .then((response) => {
            console.log(response);
        })
        .catch ((error) => {
            console.log(error);
        })
    }
    return (
        <>
        <div className = "form-group">
            {/* Make form dynamic and add form into flex box */}
            {title}
            <form onSubmit = {(e) => submitHandler(e)}>
            {inputFields.map((input, index) => {
                return (
                    <div key={index}>
                        <input
                            type="email"
                            name='email'
                            placeholder={placeholder}
                            value = {input.email}
                            onChange={event=> {handleChangeForm(index, event)}}
                            autoComplete = "off"
                            required
                        />
                        <button
                            className = "submit-Btn"
                            type="submit"
                            >
                                Submit
                        </button>
                    </div>
                )
                })}
            </form>
        </div>
        </>
    );
}
{/* <form>
<div>
    <TextField title="Hello" placeholder="Email address..."/>
</div> */}
export default TextField