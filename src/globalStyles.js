import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle =  createGlobalStyle`
*{
    box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Montserrat', sans-serif;
}
`;

export const Container = styled.div`
    width: 100%;
    max-width:1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 50px;
    
    @media screen and (max-width: 960px) {
     padding: 0 30px;
    }
`;
export const MainHeading = styled.h1`
    font-size: clamp(2.3rem, 6vw, 4.5rem);
    margin-bottom: 2rem;
    color: ${({inverse}) => (inverse ? '$403ae3' : '#fff')};
    width: 100%;
    letter-spacing: 4px;
    text-align: center;
`;

export const Heading = styled.h2`
    font-size: clamp(1.3rem, 6vw, 3rem);
    margin-bottom: 2rem;
    color: ${({inverse}) => (inverse ? '$403ae3' : '#fff')};
    width: 100%;
    letter-spacing: 0.4rem;
    line-height: 1.06;
    text-align: center;
`;

export const Button = styled.button`
    border-radius: 4px;
    background: none;
    white-space: nowrap;
    padding: 10 20px;
    font-size: 16px;
    color: #fff;
    outline: none;
    border: 2px solid #fff;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:before {
        background: #fff;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 0%;
    }

    &:hoover:before {
        height: 500%;
    }

    &:hoover {
        color: black;
    }
    `;

    export default GlobalStyle;
