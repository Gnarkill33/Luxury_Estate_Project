import Pic from '/images/BottomPart.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const Image = styled.div`
    background-image: url(${Pic});
    background-position: center center;
    background-repeat: no-repeat;   
    width: 100%;
    height: 100vh;    
`;