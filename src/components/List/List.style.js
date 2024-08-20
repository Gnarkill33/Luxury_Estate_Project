import styled from 'styled-components';

export const ListWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--gold-lightest);

    @media screen {
        margin-bottom: 3rem;
    }
`

export const ListTitle = styled.h2`
    font-family: var(--second-family);
    font-size: 3rem;
    line-height: 120%;
    text-align: center;
    color: var(--dark);
    padding: 6rem 0 2rem 0;
    margin: 0;

    @media screen and (max-width: 480px) {
        font-size: 2.5em;
        padding: 4rem 0 1rem 0;
    }
`

export const ListDescription = styled.div`
    font-family: var(--font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    text-align: center;
    color: var(--dark);
    margin: 0 auto;
    max-width: 60rem;
    width:auto;
    padding: 0 1rem 2rem 1rem;

    @media screen and (max-width: 480px) {
        padding: 0 1rem 1rem 1rem;
    }
`

export const ListBody = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    justify-content: flex-start;
    gap: 30px;
    max-width: 60rem;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 480px) {
        padding: 0 1rem;
        display: flex;
        justify-content: flex-start;
    }
`