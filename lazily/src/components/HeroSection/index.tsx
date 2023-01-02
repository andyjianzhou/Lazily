import React, {FC, ReactNode} from 'react';
import {HeroContainer, HeroWrapper, HeroRow, HeroColumn1, HeroColumn2, HeroTextWrapper, TopLine, Heading, Subtitle, BtnWrap, HeroImgWrapper, Img} from './HeroElements';
// Add onto pages
const HeroPage = () => {
    return(
        // Create containers later
        <>
        {/* <HeroContainer> */}
            <HeroWrapper>
                <HeroRow>
                    <HeroColumn1>
                        <HeroTextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                {/*  */}
                            </BtnWrap>
                        </HeroTextWrapper>
                    </HeroColumn1>
                    <HeroColumn2>
                        <HeroImgWrapper>
                            <Img/>
                        </HeroImgWrapper>
                        <button>yo</button>
                    </HeroColumn2>
                </HeroRow>
            </HeroWrapper>
        {/* </HeroContainer> */}
        </>
    )
}

export default HeroPage