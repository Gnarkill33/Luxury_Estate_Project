import { Container, Wrapper, Reference } from './NavBar.style.js';

const NavBar = () => {
    return (
        <Container>
            <Reference to='/' $primary>LUXURY RENTALS</Reference>
            <Wrapper>
                <Reference to='/villas'>VILLAS</Reference>
                <Reference>ABOUT US</Reference>
                <Reference>CONTACT</Reference>
            </Wrapper>
        </Container>
    )
}

export default NavBar