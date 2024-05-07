import styled from'styled-components';

export const TitleWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 0 5px 5px 5px;
    padding: 0.3rem 1.2rem;
    width: 29rem;
    height: 1.5rem;
    background: var(--title-background);
`;

export const TitleElement = styled.h2`
    font-family: ${props => props.$small ? "var(--font-family)" : "var(--second-family)"};
    font-weight: ${props => props.$small? "500" : "700"};
    font-size: ${props => props.$small? "1.1rem" : "4.5rem"};
    letter-spacing: ${props => props.$small? "0.12em" : "-0.01em"};
    line-height: ${props => props.small ? "0.1rem" : "114%"};
    color: ${props => props.$small? "var(--gold-gold)" : "var(--white)"};
    text-shadow: ${props => props.$small? "0" : "2px 3px 50px rgba(0, 0, 0, 0.35)"};
    margin-top: ${props => props.$small? "0" : "11rem"};
    margin-bottom: ${props => props.$small? "0" : "1rem"};
    text-align: center;
`; 







