import styled from 'styled-components';

export const JoinWindowBody = styled.div`
    width: 25rem;
    height: 20rem;
    border-radius: 60px 4px 60px 4px;
    box-shadow: 0px 4.39px 8.31px 0px rgba(0, 0, 0, 0.02),0px 14.74px 27.92px 0px rgba(0, 0, 0, 0.02),0px 66px 125px 0px rgba(0, 0, 0, 0.04);
    background-color: var(--white);
    opacity: 0.88;
    margin: 7rem auto;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 480px) {
        width: 18rem;
        height: auto;
        margin: 3rem auto;
    }
`;

export const JoinWindowTop = styled.p`
    color: var(--primary-gold-dark);
    font-family: Raleway;
    font-size: 12px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    margin: 3rem 0 0 0;

    @media screen and (max-width: 480px) {
        margin: 1rem 0 0 0;
    }
`;

export const JoinWindowTitle = styled.h3`
    color: ${props => props.$textColor || 'var(--dark)'};
    font-family: Rufina;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1px;
    text-align: ${props => props.$textAlign || 'center'};
    margin: ${props => props.$margin || 'none'};

    @media screen and (max-width: 480px) {
        font-size: 25px;
    }
`;

export const JoinWindowDescription = styled.p`
    color: var(--dark);
    font-family: Raleway;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    margin: 2rem 2.5rem 0 2.5rem;

    @media screen and (max-width: 480px) {
        font-size: 10px;
    }
`;

export const Button = styled.button`
    border-radius: 0 10px 10px 10px;
    border: none;
    padding: 15px;
    height: 2.5rem;
    background: ${props => props.$transparent || 'var(--primary-gold-dark)'};
    font-family: var(--font-family);
    font-size: 12px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${props => props.$gold || 'var(--white)'};
    width: ${props => props.$small || '100%'};
    min-width: 100px; 
    max-width: 20rem;
    margin: ${props => props.$margin || '2rem auto'};

    @media screen and (max-width: 480px) {
        width: 230px;
    }
`;