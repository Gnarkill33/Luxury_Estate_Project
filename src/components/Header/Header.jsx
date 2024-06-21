import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';
import { FilterWrapper } from './Header.style.js';
import Filters from '../Filters';
import SearchButton from '../SearchButton/SearchButton';

const Header = ({ type }) => {
    return (
        <>
            < NavBar />
            < Title 
                type={type} 
                textBig='BE OUR GUEST' 
                textSmall='LIVE LIKE A KING IN OUR BEST HOUSES' 
                textVillas='All Villas'
                villasNumber='124'/>
            <FilterWrapper $marginTop $marginBottom>
                <Filters />
                <SearchButton />
            </FilterWrapper>
        </>
    )
}

export default Header;