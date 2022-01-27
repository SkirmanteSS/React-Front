import React from 'react';
import { Link } from 'react-router-dom';
import { Button, HeroSection, HeroText, ButtonWrapper, HeroButton, Container, MainHeading } from '../../globalStyles';


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