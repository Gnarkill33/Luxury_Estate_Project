import { Wrapper, Top, Container, Bottom } from './Footer.style.js';
import Contacts from './Contacts';
import Feedback from './Feedback';
import Details from './Details';
import Links from './Links';

const Footer = () => {
    return (
        <Wrapper>
            <Top>
                <Container>       
                    < Contacts />
                    < Feedback />
                </Container>
            </Top>
            <Bottom>
                <Details />
                <Links />
            </Bottom>
        </Wrapper>

    )

}

export default Footer;