import { FilterWrapper } from './MainSection.style.js';
import SearchButton from './SearchButton';
import Filters from './Filters';
import Title from './Title';

const MainSection = () => {
    return (
        < >
            <Title />
            <FilterWrapper>
                <Filters />
                <SearchButton />
            </FilterWrapper>
        </>
    )
}

export default MainSection;