import {Container, Wrapper, Rights} from './Links.style.js';
import {Link} from './Links.style.js';

const Links = () => {
    return (
        <Container>
            <Wrapper>
                <Link>Terms & Conditions</Link>
                <Link>Privacy Notice and Cookies</Link>
                <Link>Imprint</Link>
            </Wrapper>
            <Rights>
                Luxury rentals. | © All rights reserved 2022-2023
            </Rights>

        </Container>

    )
}

export default Links;