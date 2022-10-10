import styled from "styled-components";

export const CardWrapper = styled.section`
background-color: #f9f9f9;
padding: 20px;
display: block;
justify-content: center;
align-items: center;    
`;

export const CardContainer = styled.section`
    background-color: #f9f9f9;
    padding: 20px;
    display: block;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50vw;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 25% auto;
    
`;
export const FlexBox = styled.div`
background-color: #fff;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
`;

export const CardImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
export const CardTitle = styled.h2`
font-size: 20px;
font-weight: 700;
`;
export const CardText = styled.p`
font-size: 16px;
font-weight: 400;
`;
