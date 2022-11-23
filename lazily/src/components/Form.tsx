import React, {useEffect, useState} from 'react';
import 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/styles.css'
import TextField from 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/components/UI/TextField'
//Rest API
import Axios from 'axios';

interface FormProps {
    title: string
    placeholder: string
    button?: React.ReactNode
}

const Form: React.FC<FormProps> = ({title, placeholder, button}) => {

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
        Axios.post('http://127.0.0.1:1025/api/emails/', {
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
                            <TextField
                                placeholder={placeholder} 
                                value={input.email} 
                                onChange={event=> {handleChangeForm(index, event)}}/>
                                {button}
                        </div>
                    )
                })}
            </form>
        </div>
        </>
    );
}
export default Form