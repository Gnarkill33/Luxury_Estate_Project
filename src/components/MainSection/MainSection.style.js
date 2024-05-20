import styled from'styled-components';

export const FilterWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
    border-bottom: 5px solid var(--gold-gold);
    border-radius: 10px;
    padding: 10px;
    max-width: 65rem;
    width: auto;
    box-shadow: 0 20px 0 0 rgba(24, 29, 36, 0.72);
    background: var(--white);
    margin-top: 7rem;
    margin-bottom: 10rem;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;