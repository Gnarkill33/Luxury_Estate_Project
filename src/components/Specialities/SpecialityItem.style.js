import styled from 'styled-components'

export const SpecialityWrapper = styled.li`
    height: 60px;
    display: flex;
    flex-direction: column;
    padding: 10px 30px 0 30px;

    @media screen and (max-width: 480px) {
        padding: 0 0 0 10px;
        height: auto;
    }
`;

export const SpecialityName = styled.div`
    color: var(--dark);
    font-family: Rufina;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
`;

export const SpecialityText = styled.div`
    color: var(--primary-gold-dark);
    font-family: Raleway;
    font-size: 8px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    letter-spacing: 0.5px;
`;

export const Icon = styled.div`
    size: 20px;
    color: var(--gold-gold);
`;