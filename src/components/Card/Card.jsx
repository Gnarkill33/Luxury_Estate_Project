import { CardWrapper, CardImage, CardContainer, CardPrice, CardBody, CardName, CardDetails, CardLocation, IconDivider, DetailsWrapper, IconGuests, IconBeds, IconBaths, IconArea, IconLike } from './Card.style.js'

const Card = ( item ) => {
    return (
        <CardWrapper>
            < CardImage image={item.image} >
                <CardContainer>
                    <CardPrice>
                        {item.price}
                    </CardPrice>
                    <IconLike size='20px' />
                </CardContainer>
            </CardImage>
            < CardBody >
                <CardLocation>
                    {item.country}
                    <IconDivider size='8px' />
                    {item.location}
                </CardLocation>
                <CardName>
                    {item.name}
                </CardName>
                <CardDetails>
                    <DetailsWrapper>
                        <IconGuests />
                        {item.guests}
                    </ DetailsWrapper>
                    <DetailsWrapper>
                        <IconBeds />
                        {item.bedrooms}
                    </ DetailsWrapper>
                    <DetailsWrapper>
                        <IconArea />
                        {item.area}
                    </ DetailsWrapper>
                    <DetailsWrapper>
                        <IconBaths />
                        {item.bathrooms}
                    </ DetailsWrapper>
                </CardDetails >
            </ CardBody >
        </CardWrapper >
    )
}

export default Card;