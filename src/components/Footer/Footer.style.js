import styled from 'styled-components';

export const Top = styled.div`
    width: 65%;
    display: flex;
    gap: 1rem;
    position: absolute;
    top: 27rem;
    left: 19rem; 

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
    display: flex;
    flex-direction: column;
`;