import styled from 'styled-components'

export const Container = styled.div`
    background: var(--primary-gold-light);
    display: flex;
    justify-content: space-between;
    padding: 5rem 22rem 1rem 19rem;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        padding: 19rem 2rem 1rem 2rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;    
    flex-direction: column;
    max-width: 500px;
`;

export const Title = styled.h4`
    color: var(--dark);
    font-family: Raleway;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 2px;
    text-align: left;
    text-transform: uppercase;
`;

export const Text = styled.p`
    color: var(--primary-gold-dark);
    font-family: Raleway;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    text-align: left;

    @media screen and (max-width: 480px) {
        line-height: 18px;
    }
`;

export const Contacts = styled.p`
    color: var(--dark);
    font-family: Raleway;
    font-size: 10px;
    font-weight: ${props => props.$weight || '400'};
    line-height: 24px;
    text-align: left;
`;

export const IconsWrapper = styled.div`
    display: flex;
    gap: 1rem;
`;