import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    background: var(--menu-gradient);
`;

export const LinkWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    gap: 40px;
    margin: 0 15rem 0 0;
`;

export const Link = styled.a`
    font-weight: ${props => props.$primary ? "500" : "400"};
    font-size: ${props => props.$primary ? "1.2rem" : "1rem"};
    letter-spacing: ${props => props.$primary ? "0.27em" : "0.06em"};
    font-family: ${props => props.$primary ? "var(--font-family)" : "var(--second-family)"};
    color: ${props => props.$primary ? "var(--lightest)" : "var(--white)"};
    margin-left: ${props => props.$primary? "10rem" : "0"};
    text-align: center;
    line-height: 5rem;
    cursor: pointer;
`;