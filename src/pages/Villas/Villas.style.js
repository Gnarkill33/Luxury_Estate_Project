import styled from 'styled-components';
import Image from '/images/filters.svg';

export const Container = styled.div`
    background-image: url(${Image});
    background-repeat: no-repeat;
`;

export const Results = styled.div`
    color: var(--white);
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0%;
    text-align: center;
`;

export const AllVillas = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 25px;
    margin: 2rem 14rem;
`;