import { Container, LinkWrapper, Link } from './NavBar.style.js';

const NavBar = () => {
    return (
        <Container>
            <Link $primary>LUXURY RENTALS</Link>
            <LinkWrapper>
                <Link>VILLAS</Link>
                <Link>ABOUT US</Link>
                <Link>CONTACT</Link>
            </LinkWrapper>
        </Container>
    )
}

export default NavBar