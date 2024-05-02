import styled from 'styled-components';
import Link from './Link';
import LinkWrapper from './LinkWrapper';

const NavBarElement = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 277px;
    width: 60rem;
    height: 5rem;
    background: rgba(3, 3, 3, 0.2);
    margin-top: -10px;
    margin-left: -10px;
`;

const NavBar = () => {
    return (
        <NavBarElement>
            <Link $primary>LUXURY RENTALS</Link>
            <LinkWrapper>
                <Link>VILLAS</Link>
                <Link>ABOUT US</Link>
                <Link>CONTACT</Link>
            </LinkWrapper>
        </NavBarElement>
    )
}

export default NavBar