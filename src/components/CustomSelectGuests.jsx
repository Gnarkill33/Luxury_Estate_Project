import styled from 'styled-components';
import Select from 'react-select';

const CustomSelectGuests = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--white)',
            color: 'var(--dark)',
            borderRadius: '4px',
            width: '12rem',
            height: '24px',
            fontFamily: 'var(--font-family)',
            placeholder: 'Select a country',
            padding: '0 10px',
            margin: '10px 0 0 10px',
            border: 'none',
        }),
        option: (provided) => ({
            ...provided,
            cursor: 'pointer',

        })
    }
})``;

export default CustomSelectGuests