import styled from'styled-components';

export const Container = styled.div`
    max-width: 65rem;
    width: auto;    
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0px 20px 0px 0px rgba(24, 29, 36, 0.72);
    background: var(--white);
`;

export const Title = styled.h4`
    color: var(--dark);
    font-family: Rufina;
    font-size: 2rem;
    font-weight: 600;
    line-height: 2.5rem;
    letter-spacing: 0.05rem;
    text-align: left;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    // gap: 0.5rem;
    // justify-items: start;
    // grid-template-columns: 1fr;
    // grid-template-rows: 1fr 1fr;
`;

export const Category = styled.div`
    color: var(--dark);
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    text-align: left;
    
`;

export const Option = styled.input`
    border: 2px solid var(--dark);
    border-radius: 2px;
    transform: scale(1.1);
    cursor: pointer;
`;

export const Label = styled.label`
    color: var(--dark);
    font-family: Raleway;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.5rem;
    text-align: left;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
