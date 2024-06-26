import NavBar from '../NavBar/NavBar';
import Title from '../Title/Title';
import { FilterWrapper } from './Header.style.js';
import Filters from '../Filters';
import SearchButton from '../SearchButton/SearchButton';
import { Button } from '../../components/JoinWindow/JoinWindow.style.js';


const Header = ({ type }) => {
    return (
        <> 
        { type === 'primary' &&
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
        }
        { type === 'secondary' && 
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
            <Button
                $small $gold='var(--gold-gold-light)' 
                $transparent='transparent' 
                $margin='0 0 0 14rem'>
                    ADD FILTERS
            </Button>
        </>
        }
        </>
    )
}

export default Header;