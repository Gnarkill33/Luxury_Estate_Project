import styled from 'styled-components';

export const Container = styled.div`
    height: 5rem;
    background: var(--menu-gradient);
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 480px) {
        display: grid;
        grid-template-columns: 250px 1fr;
    }
`;

export const LinkWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 40px;
    margin: 0 15rem 0 0;
    
    @media screen and (max-width: 480px) {
        gap: 0;
    }
`

export const Link = styled.a`
    font-weight: ${props => props.$primary ? "500" : "400"};
    font-size: ${props => props.$primary ? "1.2em" : "1em"};
    letter-spacing: ${props => props.$primary ? "0.27em" : "0.06em"};
    font-family: ${props => props.$primary ? "var(--font-family)" : "var(--second-family)"};
    color: ${props => props.$primary ? "var(--lightest)" : "var(--white)"};
    margin-left: ${props => props.$primary? "10rem" : "0"};
    display: inline-block;
    text-align: center;
    line-height: 5rem;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        margin-left: ${props => props.$primary? "2rem" : "0"};
        font-size: ${props => props.$primary? "1em" : "0"};
    }
`