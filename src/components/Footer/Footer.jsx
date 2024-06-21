import { Top, Bottom } from './Footer.style.js';
import Contacts from './Contacts';
import Feedback from './Feedback';
import Details from './Details';
import Links from './Links';

const Footer = () => {
    return (
        <>
            <Top>       
                < Contacts />
                < Feedback />
            </Top>
            <Bottom>
                <Details />
                <Links />
            </Bottom>
        </>
    )
}

export default Footer;