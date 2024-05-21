import styled from 'styled-components';

export const CatalogueWrapper = styled.div`
    width: 100%;
    height: 100vh;
    border-radius: 0px 10px 75px 10px;
    background: var(--gold-gold);
`

export const CatalogueTitle = styled.h2`
    color: var(--dark);
    font-family: Rufina;
    font-size: 45px;
    font-weight: 700;
    line-height: 72px;
    text-align: center;
    padding-top: 5rem;

    @media screen and (max-width: 480px) {
        font-size: 38px;
        padding-top: 2rem;
    }
`

export const CatalogueDescription = styled.div`
    max-width: 40rem;
    margin: 0 auto;
    color: var(--dark);
    font-family: Raleway;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;

    @media screen and (max-width: 480px) {
        margin: 0 5px;
        font-size: 12px;
    }
`

export const CatalogueBody = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2.5rem;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }
`