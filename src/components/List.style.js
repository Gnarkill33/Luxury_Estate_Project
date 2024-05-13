import styled from 'styled-components';

export const ListWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--gold-lightest);
`

export const ListTitle = styled.h2`
    font-family: var(--second-family);
    font-size: 3rem;
    line-height: 120%;
    text-align: center;
    color: var(--dark);
    padding: 6rem 0 2rem 0;
    margin: 0;
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
`

export const ListBody = styled.div`
    display: grid;
    justify-content: center;
    grid-gap: 20px;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    padding: 0 10rem;
    max-width: 60rem;
    margin: 0 auto;
`