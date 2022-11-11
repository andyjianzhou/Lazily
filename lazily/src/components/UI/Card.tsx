//Create a beautiful card component in typescript

import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';
import { CardContainer, CardWrapper, CardTitle, CardBody } from '../../styles';

// Make a white flex box with shadow
// Make it to the middle of the screen


interface CardProps {
    title: string
    description?: string
    children?: ReactNode
    image?: string
}
const Card: FC<CardProps> = ({title, children, description, image}) => {
    return (
        <>
        <CardContainer>
            <CardWrapper>
                <div>
                    <CardTitle>{title}</CardTitle>
                    {description && <p>{description}</p>}
                </div>
                <div>
                    {children}
                </div>
            </CardWrapper>
        </CardContainer>
        </>
    );
}

export default Card;