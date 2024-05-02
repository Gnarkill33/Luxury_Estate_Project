import React from 'react';
import styled from 'styled-components';
import TitleBig from './TitleBig';
import TitleSmall from './TitleSmall';
import TitleWrapper from './TitleWrapper';
import FilterWrapper from './FilterWrapper';
import SearchButton from './SearchButton';
import { IoSearchSharp } from "react-icons/io5";
import SearchIconContainer from './SearchIconContainer';
import CustomSelectLocation from './CustomSelectLocation';
import CustomSelectDate from './CustomSelectDate';
import CustomSelectGuests from './CustomSelectGuests';
import CustomSelectPrice from './CustomSelectPrice';

const optionsLocation = [
    { value: '1', label: 'Spain' },
    { value: '2', label: 'Portugal' },
    { value: '3', label: 'Greece' },
    { value: '4', label: 'Italy' },
]

const optionsGuests = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
]

const optionsPrice = [
    { value: '1', label: '1000€' },
    { value: '2', label: '2000€' },
    { value: '3', label: '3000€' },
    { value: '4', label: '4000€' },
]

const MainSection = () => {
    return (
        < >
            <TitleBig>BE OUR GUEST</TitleBig>
            <TitleWrapper>
                <TitleSmall>LIVE LIKE A KING IN OUR BEST HOUSES</TitleSmall>
            </TitleWrapper>
            <FilterWrapper>
                <CustomSelectLocation options={optionsLocation} placeholder="Location" />
                <CustomSelectDate />
                <CustomSelectGuests options={optionsGuests} placeholder="Guests" />
                <CustomSelectPrice options={optionsPrice} placeholder="Price" />
                <SearchButton>
                    <SearchIconContainer>
                        Search
                        < IoSearchSharp size='22px' />
                    </SearchIconContainer>
                </SearchButton>
            </FilterWrapper>
        </>
    )
}

export default MainSection;