import styled from 'styled-components';

const Link = styled.a`
    font-weight: ${props => props.$primary ? "500" : "400"};
    font-size: ${props => props.$primary ? "1.2rem" : "1rem"};
    letter-spacing: ${props => props.$primary ? "0.27em" : "0.06em"};
    font-family: ${props => props.$primary ? "var(--font-family)" : "var(--second-family)"};
    color: ${props => props.$primary ? "var(--lightest)" : "var(--white)"};
    text-align: center;
    text-transform: uppercase;
    line-height: 5rem;
    pointer: cursor;
`;


export default Link;
