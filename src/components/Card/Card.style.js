import styled, { css } from 'styled-components';
import { IoEllipse } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { IoBusinessOutline } from "react-icons/io5";
import { IoWaterOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 30px 8px;
    width: 19rem;
    height: 25rem;
    background: var(--white);
    margin: 0 auto;
    max-width: 30rem;

    @media screen and (max-width: 480px) {
        height: 24rem;
    }
`

export const CardImage = styled.div`
    width: 100%;
    height: 100%;
    ${ props => props.index === "1" && css`
    background-image: url(${props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;    
    `}
    ${ props => props.index === "2" && css`
    background-image: url(${props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    `}
    ${ props => props.index === "3" && css`
    background-image: url(${props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    `}
`

export const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0 0 0;
    padding: 0 20px 0 20px;
`

export const CardPrice = styled.div`
    font-size: 10px;
    font-weight: 700;
    border-bottom: 4px solid #918675;
    border-radius: 4px 4px 20px 4px;
    padding: 10px;
    background: var(--gold-gold-light);
`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    padding-top: 0;
`

export const CardLocation = styled.p`
    width: 100%;
    margin: 10px 0 0 0;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 0.9em;
`

export const CardName = styled.h3`
    font-family: var(--second-family);
    font-weight: 700;
    font-size: 30px;
    line-height: 122%;
    letter-spacing: 0.03em;
    color: var(--dark);
    margin: 10px 0 0 0;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`

export const CardDetails = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, minmax(100px, 150px));;
    grid-template-rows: 1fr 1fr;
    margin: 7px 0 0 0;
    gap: 10px;
    font-size: 0.9em;

    @media screen and (max-width: 480px) {
        font-size: 10px;
    }
`

export const DetailsWrapper = styled.div`
    display: flex;
    gap: 10px;
    display: flex;
`

export const IconDivider = styled(IoEllipse)`
    color: grey;
    margin: 0 15px;
`

export const IconGuests = styled(IoPeopleOutline)`
    color: brown;
`

export const IconBeds = styled(IoBedOutline)`
    color: brown;
`

export const IconBaths = styled(IoWaterOutline)`
    color: brown;
`

export const IconArea = styled(IoBusinessOutline)`
    color: brown;
`

export const IconLike = styled(IoHeartOutline)`
    color: white;
`