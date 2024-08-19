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
    text-align: center;
`;

export const AllVillas = styled.div`
    max-height: 70rem;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 25px;
    margin: 2rem 10rem;
    position: relative;
    z-index: 1;
`;