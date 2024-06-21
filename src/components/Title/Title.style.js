import styled from'styled-components';

export const TitleWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    border-radius: 0 5px 5px 5px;
    padding: 0.3rem 1.2rem;
    max-width: 30rem;
    background: var(--title-background);

    @media screen and (max-width: 480px) {
        width: 25rem;
        padding: 0.3rem 0.2rem;
    }
`;

export const TitleElement = styled.h2`
    font-family: ${props => props.$small ? "var(--font-family)" : "var(--second-family)"};
    font-weight: ${props => props.$small? "500" : "700"};
    font-size: ${props => props.$small ? "1.1rem" : "4.5rem"};
    font-size: ${props => props.$average ? "3rem" : "4.5rem"};
    letter-spacing: ${props => props.$small? "0.12em" : "-0.01em"};
    line-height: ${props => props.small ? "0.1rem" : "114%"};
    color: ${props => props.$small? "var(--gold-gold)" : "var(--white)"};
    text-shadow: ${props => props.$small? "0" : "2px 3px 50px rgba(0, 0, 0, 0.35)"};
    margin-top: ${props => props.$small? "0" : "11rem"};
    margin-top: ${props => props.$average ? "5rem" : "11rem"};
    margin-bottom: ${props => props.$small? "0" : "1rem"};
    margin-bottom: ${props => props.$average? "1rem" : "0rem"};
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: ${props => props.$small? "1em" : "3.5em"};
        margin-top: ${props => props.$small? "0" : "20rem"};
    }
`; 

export const Results = styled.div`
    color: var(--white);
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: center;
`;






