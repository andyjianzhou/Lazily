import React, { FC } from 'react';
import styled from 'styled-components';

// const ButtonWrapper = styled.section`
// background-color: #f9f9f9;
// padding: 20px;
// display: flex;
// justify-content: center;
// align-items: center;
// `;
// The ButtonStyle component will render the button with thestyles below
const ButtonStyle = styled.button`
border-radius: 20px;
background-color: #0F111C;
color: #fff;
padding: 9px 15px;
font-size: 20px;
outline: none;
cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
//   margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
border: none;
`;
// The ButtonStyle component will render the button with thestyles below
// Create an onlcick event inside ButtonProps
//Is there a better way to do this?
interface ButtonProps {
    name: string
    onClick: () => void
    style?: string
}
const Button: FC<ButtonProps> = ({ name, onClick, style}) => {
    return (
        <>
            <span style = {{color: style}}>
                <ButtonStyle onClick={onClick}>{name}</ButtonStyle>
            </span>
        </>
    );
};
export default Button;