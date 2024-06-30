import styled from'styled-components';
import { IoCloseSharp } from "react-icons/io5";

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

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 3rem;
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

export const ToClose = styled(IoCloseSharp)`
    size: 20px;
    cursor: pointer;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

export const Category = styled.div`
    color: var(--dark);
    font-family: Raleway;
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    text-align: left;
    text-transform: capitalize;
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
    justify-content: space-around;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
