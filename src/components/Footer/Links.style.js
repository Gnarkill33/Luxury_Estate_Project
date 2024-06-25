import styled from 'styled-components'

export const Container = styled.div`
    background: var(--primary-gold-light);
    display: flex;
    justify-content: space-between;
    padding: 0 17.5rem 1rem 17rem;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        padding: 0 2rem 1rem 2rem;
    }
`;

export const Wrapper = styled.div`
    display: flex;  
    justify-content: flex-start;
    gap: 2rem;
    max-width: 500px;
`;

export const Link = styled.a`
    color: var(--dark);
    font-family: Raleway;
    font-size: 8px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    cursor: pointer;
`;  

export const Rights = styled.p`
    color: var(--dark);
    font-family: Raleway;
    font-size: 8px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
`;