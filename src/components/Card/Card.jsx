import { CardWrapper, CardImage, CardContainer, CardPrice, CardBody, CardName, CardDetails, CardLocation, IconDivider, DetailsWrapper, IconGuests, IconBeds, IconBaths, IconArea, IconLike } from './Card.style.js'

const Card = ({ info }) => {
    return (
        <CardWrapper>
            < CardImage image={info.image} >
                <CardContainer>
                    <CardPrice>
                        {info.price}
                    </CardPrice>
                    <IconLike size='20px' />
                </CardContainer>
            </CardImage>
            < CardBody >
                <CardLocation>
                    {info.country}
                    <IconDivider size='8px' />
                    {info.location}
                </CardLocation>
                <CardName>
                    {info.name}
                </CardName>
                <CardDetails>
                    <DetailsWrapper>
                        <IconGuests />
                        {info.guests}
                    </ DetailsWrapper>
                    <DetailsWrapper>
                        <IconBeds />
                        {info.bedrooms}
                    </ DetailsWrapper>
                    <DetailsWrapper>
                        <IconArea />
                        {info.area}
                    </ DetailsWrapper>
                    <DetailsWrapper>
                        <IconBaths />
                        {info.bathrooms}
                    </ DetailsWrapper>
                </CardDetails >
            </ CardBody >
        </CardWrapper >
    )
}

export default Card;