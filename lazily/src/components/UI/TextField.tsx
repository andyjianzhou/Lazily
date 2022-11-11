import React from 'react';
import { useState } from 'react';

interface TextFieldProps {
    title: string
    placeholder: string
    // onChange: (value: string) => void
}

const TextField: React.FC<TextFieldProps> = ({title, placeholder}) => {
    const [inputFields, setInputFields] = useState({
        email: ''
    });
    return (
        <>
        <div className = "form-group">
            {/* Make form dynamic and add form into flex box */}
            <form>
            {title}
            <div>
                <input type="text" value={placeholder}/>
            </div>
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