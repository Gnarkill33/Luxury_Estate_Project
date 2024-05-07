import { IoSearchSharp } from "react-icons/io5";
import { SearchButtonElement, SearchIconContainer } from "./SearchButton.style.js";

const SearchButton = () => {
    return (
        <SearchButtonElement>
            <SearchIconContainer>
                Search
                < IoSearchSharp size='22px' />
            </SearchIconContainer>
        </SearchButtonElement>
    )
}

export default SearchButton;