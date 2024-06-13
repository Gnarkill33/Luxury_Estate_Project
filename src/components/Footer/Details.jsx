import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Container, Wrapper, Title, Text, Contacts, IconsWrapper } from './Details.style.js';

const Details = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Luxury RENTALS
                </Title>
                <Text>
                    We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </Wrapper>
            <Wrapper>
                <Contacts $weight='800'>
                    Connect with us
                </Contacts>
                <Contacts>
                    +00 000 000 00
                </Contacts>
                <Contacts>
                    info@luxuryrentals.com
                </Contacts> 
                <IconsWrapper>  
                    <IoLogoInstagram />
                    <IoLogoFacebook />
                    <IoLogoWhatsapp />
                </IconsWrapper>
            </Wrapper>
        </Container>
    )
}

export default Details;