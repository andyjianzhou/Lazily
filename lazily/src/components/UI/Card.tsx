//Create a beautiful card component in typescript

import React, {FC} from 'react';
import styled from 'styled-components';
import { CardContainer, CardWrapper, CardTitle } from '../../styles';

// Make a white flex box with shadow
// Make it to the middle of the screen


interface CardProps {
    title: string
    description?: string
    image?: string
}
const Card: FC<CardProps> = ({title, description, image}) => {
    return (
        <>
        <CardContainer>
            <CardWrapper>
                <CardTitle>{title}</CardTitle>
            </CardWrapper>
        </CardContainer>
        </>
    );
}

export default Card;