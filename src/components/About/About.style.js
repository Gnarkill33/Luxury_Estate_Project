import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

export const AboutWrapper = styled.div`
    display: flex;
    gap: 3rem;
    background-color: var(--gold-lightest);
    padding: 4rem 10rem 0 10rem;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
    }
`

export const AboutDescription = styled.div`
    max-width: 40%;

    @media screen and (max-width: 480px) {
        min-width: 100%;
    }
`

export const AboutTitle = styled.h3`
    position: absolute;
    top: 7rem;
    left: 10rem;
    color: var(--dark);
    font-family: Rufina;
    font-size: 40px;
    font-weight: 700;
    line-height: 72px;
    text-align: left;
    margin-bottom: 1rem;

    @media screen and (max-width: 480px) {
        font-size: 30px;
        top: 1rem;
        margin: auto;
    }
`

export const AboutText = styled.p`
    color: var(--dark);
    font-family: Raleway;
    font-size: 13px;
    font-weight: 600;
    line-height: 24px;
    text-align: left;
    margin-top: 8rem;

    @media screen and (max-width: 480px) {
        margin-bottom: 1rem;
        font-size: 10px;
        margin-top: 0;
    }
`

export const AboutMoto = styled.p`
    color: var(--dark);
    background: var(--primary-gold-light);
    font-family: Rufina;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.8rem;
    text-align: center;
    border-radius: 0.2rem;
    padding: 0.5rem;
    width: 37rem;
    height: 3rem;
    margin-top: 10rem;

    @media screen and (max-width: 480px) {
        width: auto;
        height: auto;
        font-size: 15px;
        margin-top: 1rem;
    }
`

export const AboutImage = styled.div`
    width: 60%;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    position: relative;

    @media screen and (max-width: 480px) {
        width: 100%;
        margin-top: 5rem;
    }
`

export const ImageContainerTop = styled.div`
    grid-column: 1 / 5;
    grid-row: 1;
    z-index: 1;
`

export const ImageContainerBottom = styled.div`
    grid-column: 3 / 10;
    grid-row: 1;
    padding-top: 4rem;
    overflow: hidden;
`;

export const Image = styled.img`
    border: ${props => props.$top ? "8px solid var(--lightest)" : "none"};
`