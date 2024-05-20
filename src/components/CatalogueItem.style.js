import styled, { css } from 'styled-components';

export const CatalogueItemWrapper = styled.div`
    width: 28%;
    height: 50vh;
    ${ props => props.index === "1" && css`
    border-radius: 3px 70px 3px 70px;
    `}
    ${ props => props.index === "2" && css`
    border-radius: 70px 3px 70px 3px;
    `}

    @media screen and (max-width: 375px) {
        width: 90%;
        height: 15%;
`
    
export const CatalogueItemName = styled.h3`
    color: var(--white);
    font-family: Rufina;
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
    text-align: left;
    padding: 16rem 2rem 0 2rem;
`

export const CatalogueItemDetails = styled.div`
    color: var(--white);
    font-family: Raleway;
    font-size: 15px;
    font-weight: 400;
    line-height: 22.84px;
    letter-spacing: 0%;
    text-align: left;
    padding: 0 2rem 0 2rem;
`