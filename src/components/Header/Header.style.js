import styled from 'styled-components';
import Image from '../../assets/images/homepage_bg.svg'

export const HeaderElement = styled.div`
    background-image: url('${Image}');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    background-color: var(--gold-lightest);
`

