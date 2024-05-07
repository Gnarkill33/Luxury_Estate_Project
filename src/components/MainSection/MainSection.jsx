import { FilterWrapper } from './MainSection.style.js';
import SearchButton from '../SearchButton/SearchButton.jsx';
import Filters from '../Filters.jsx';
import Title from '../Title/Title.jsx';

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