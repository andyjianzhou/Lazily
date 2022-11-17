import React, {useEffect, useState} from 'react';
import 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/styles.css'

//Rest API
import Axios from 'axios';

interface TextFieldProps {
    title: string
    placeholder: string
    button?: React.ReactNode
}

const TextField: React.FC<TextFieldProps> = ({title, placeholder, button}) => {

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
        Axios.post('http://127.0.0.1:8080/api/emails/', {
            method: 'POST',
            params: {
                email: inputFields[0].email,
            }
            }).then(response => {
                console.log(response.data.created_at);
            }).catch(error => {
                console.log(error.response.data);
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