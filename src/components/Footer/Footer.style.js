import styled from 'styled-components';
import Image from '/images/Footer.svg';


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    position: absolute;
    top: 16rem;
    left: 19rem;
    width: 65%;
    height: 70%;
    display: flex;
    gap: 1rem;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        width: 20rem;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Top = styled.div`
    position: relative; 
    width: 100%;
    height: 100%;
    background-image: url(${Image});
    // background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const Bottom = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
`;