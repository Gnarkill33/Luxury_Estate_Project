import styled, { css } from 'styled-components';

export const CatalogueItemWrapper = styled.div`
    width: 28%;
    height: 50vh;
    ${ props => props.index === "1" && css`
    background-image: url(${props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 3px 50px 3px 50px;
    `}
    ${ props => props.index === "2" && css`
    background-image: url(${props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 50px 3px 50px 3px;
    `}

    @media screen and (max-width: 480px) {
        width: 65%;
        height: 33vh;
`
    
export const CatalogueItemName = styled.h3`
    color: var(--white);
    font-family: Rufina;
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
    text-align: left;
    padding: 16rem 2rem 0 2rem;

    @media screen and (max-width: 480px) {
        font-size: 24px;
        padding: 8rem 2rem 0 2rem;
    }
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

    @media screen and (max-width: 480px) {
        font-size: 10px;
        padding: 0 2rem 1rem 2rem;
    }
`