import React, {useEffect, useState} from 'react';
import 'C:/Users/YOLO4/OneDrive/Desktop/Lazily/lazily/src/styles.css'

//Rest API
import Axios from 'axios';

interface TextFieldProps {
    title?: string
    placeholder: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    button?: React.ReactNode
}

const TextField: React.FC<TextFieldProps> = ({title, placeholder, value, onChange, button}) => {
    return (
        <>
        <div className = "form-group">
            {/* Make form dynamic and add form into flex box */}
            {title}
                <input
                    type="email"
                    name='email'
                    placeholder={placeholder}
                    value = {value}
                    onChange={onChange}
                    autoComplete = "off"
                    required
                />
                {button}
        </div>
        </>
    );
}
export default TextField