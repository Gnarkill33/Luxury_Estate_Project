import styled from 'styled-components';

export const Container = styled.div`
    height: 22.5rem;
    display: flex;
    justify-content: center;
`;

export const Top = styled.div`
    width: 65%;
    display: flex;
    gap: 1rem;
    position: absolute;
    bottom: 14.5rem;
    z-index: 1;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        width: 20rem;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const Bottom = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background: var(--primary-gold-light);
`; 