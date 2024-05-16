import styled from 'styled-components'

export const SearchButtonElement = styled.button`
    border-radius: 0 10px 10px 10px;
    border: none;
    padding: 15px;
    height: 3.2rem;
    background: var(--primary-gold-dark);
    font-family: var(--font-family);
    font-size: 18px;
    line-height: 133%;
    letter-spacing: 0.06em;
    color: var(--white);
    width: 100%;
    min-width: 100px; 
    max-width: 150px;
    z-index: 1;
`;

export const SearchIconContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
`