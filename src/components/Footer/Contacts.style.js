import styled from 'styled-components'

export const Window = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 5px 30px 5px 5px;
    background: var(--dark);
    padding: 2rem;

    @media screen and (max-width: 480px) {
        width: auto;
        height: auto;
        margin: 0 auto;
        padding: 1rem;
    }
`;

export const Body = styled.div`
    display: grid; 
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto auto;
    grid-gap: 1rem;
    margin-top: 1rem;
`;

export const Field = styled.div`
    color: var(--white);
    font-family: Rufina;
    font-size: 13px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 1px;
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 11px;
    }
`;

export const FieldText = styled.div`
    color: var(--white);
    font-family: Raleway;
    font-size: 11px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
`;