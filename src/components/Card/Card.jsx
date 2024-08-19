import { CardWrapper, CardImage, CardContainer, CardPrice, CardBody, CardName, CardDetails, CardLocation, IconDivider, DetailsWrapper, IconGuests, IconBeds, IconBaths, IconArea, IconLike } from './Card.style.js'

const Card = ( item ) => {
    return (
        <CardWrapper>
            < CardImage image={item.image} >
                <CardContainer>
                    <CardPrice>
                    From €{item.price} / daily
                    </CardPrice>
                    <IconLike size='20px' />
                </CardContainer>
            </CardImage>
            < CardBody >
                <CardLocation>
                    {item.country}
                    <IconDivider size='8px' />
                    {item.place}
                </CardLocation>
                <CardName>
                    {item.name}
                </CardName>
                <CardDetails>
                    <DetailsWrapper>
                        <IconGuests />
                        {item.guests} guests
                    </ DetailsWrapper>
                    <DetailsWrapper>
                        <IconBeds />
                        {item.bedrooms} bedrooms
                    </ DetailsWrapper>
                    <DetailsWrapper>
                        <IconArea />
                        {item.area} m2
                    </ DetailsWrapper>
                    <DetailsWrapper>
                        <IconBaths />
                        {item.bathrooms} bathrooms
                    </ DetailsWrapper>
                </CardDetails >
            </ CardBody >
        </CardWrapper >
    )
}

export default Card;