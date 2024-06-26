import styled from 'styled-components';
import Image from '../../assets/images/Bottom.svg';

export const SpecialityBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    @media screen and (max-width: 480px) {
        height: auto;
    }
`;

export const SpecialityTitle = styled.h3`
    color: var(--dark);
    font-family: Rufina;
    font-size: 30px;
    font-weight: 600;
    line-height: 64px;
    letter-spacing: 1px;
    text-align: center;
    margin: 30px 0 10px 0;

    @media screen and (max-width: 480px) {
        margin: 20px 25px 15px 25px;
        line-height: 44px;
    }
`;

export const SpecialityList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    height: 10%;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        height: 10%;
        max-width: 26%;
        min-width: 130px;
    }
`;

export const SpecialityContainer = styled. div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    position: relative;

    & + & {
        border-left: solid 1px var(--gold-gold);
    }

    @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: row;

        & + & {
            border-top: solid 1px var(--gold-gold);
            border-left: none;
            padding-top: 5px;
        }
    }
`;

export const SpecialityBottom = styled.div`
    background-image: url(${Image});
    width: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 0px 0px 75px 0px;
`;

export const Icon = styled.div`
    size: 20px;
    color: var(--gold-gold);
    margin-left: 27px;

    @media screen and (max-width: 480px) {
        margin: 0;
        padding-bottom: 22px;
    }
`