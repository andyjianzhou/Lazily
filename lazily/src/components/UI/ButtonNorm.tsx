import React, { FC } from 'react';
import styled from 'styled-components';

// The ButtonStyle component will render the button with thestyles below
const ButtonStyle = styled.button`
background-color: #FFFF00;
color: #fff;
border: none;
margin-left: 0px;  
font-size: 16px;
padding: ;
cursor: pointer;
  transition: all 0.2s ease-in-out;E
  text-decoration: none;
  
  /* Second Nav */
  &:hover {
    transition: all 0.2s ease-in-out;
    background: transparent;
    color: #D3D3D3;
`;
// Decorate the span so that it leaves no space
interface ButtonProps {
    name: string
    onClick?: () => void
    style?: string
}
const ButtonNorm: FC<ButtonProps> = ({ name, onClick, style}) => {
    return (
        <>
            <span style = {{color: style}}>
                <ButtonStyle onClick={onClick}>{name}</ButtonStyle>
            </span>
        </>
    );
};
export default ButtonNorm;