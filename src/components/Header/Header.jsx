import NavBar from '../NavBar/NavBar';
import MainSection from '../MainSection/MainSection';
import { HeaderElement } from './Header.style.js';

const Header = () => {
    return (
        < HeaderElement >
            < NavBar />
            < MainSection />
        </ HeaderElement >
    )
}

export default Header;