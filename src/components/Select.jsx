import styled from 'styled-components';
import Select from 'react-select';

const CustomSelectLocation = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'var(--white)',
            color: 'var(--dark)',
            borderRadius: '4px',
            height: '24px',
            fontFamily: 'var(--font-family)',
            padding: '0 10px',
            margin: '10px 0 0 10px',
            border: 'none',
            width: "max-content",
            minWidth: "100%",
        }),
        option: (provided) => ({
            ...provided,
            cursor: 'pointer',

        })
    }
})``;

export default CustomSelectLocation