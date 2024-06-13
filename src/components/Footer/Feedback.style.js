import styled from 'styled-components';


export const Wrapper = styled.div`
    width: 40rem;
    height: 20rem;
    border-radius: 5px 5px 30px 5px;;
    background: var(--white);
    padding: 2rem 3rem 1rem 3rem;

    @media screen and (max-width: 480px) {
        width: 16rem;
        height: auto;
        padding: 0 1rem;
        margin: 0 auto;
    }
`;

export const FeedbackInput = styled.input`
    width: 100%;
    padding: 7px 7px 7px 0;
    border: none;
    border-bottom: 3px solid #ccc;
    color: var(--primary-gold-dark);
    font-family: Raleway;
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
`;