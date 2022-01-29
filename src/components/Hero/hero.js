import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroSection, HeroText, HeroButton, ButtonWrapper } from './heroStyles';


const Hero = () => {
    return (
        <HeroSection>
            <Container>
                <MainHeading>There are no posts yet</MainHeading>

                <HeroText>
                    Loading
                </HeroText>
                <ButtonWrapper>
                    <Link to='signup'>
                        <Button> e-mail</Button>
                    </Link>
                    <HeroButton> more</HeroButton>
                </ButtonWrapper>
            </Container>

        </HeroSection>
    );
};

export default Hero