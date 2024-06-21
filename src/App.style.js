import styled from 'styled-components';
import Image from '/images/homepage_bg.svg'

export const Container = styled.div`
    background-image: url(${Image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    border-radius: 0px 10px 75px 10px;
`;