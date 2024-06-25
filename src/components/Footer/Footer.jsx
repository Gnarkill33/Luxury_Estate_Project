import { Top, Bottom, Container } from './Footer.style.js';
import Contacts from './Contacts';
import Feedback from './Feedback';
import Details from './Details';
import Links from './Links';

const Footer = () => {
    return (
        <Container>
            <Top>       
                < Contacts />
                < Feedback />
            </Top>
            <Bottom>
                <Details />
                <Links />
            </Bottom>
        </Container>
    )
}

export default Footer;