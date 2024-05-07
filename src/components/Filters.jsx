import Select from './Select';
import SelectDate from './SelectDate/SelectDate';

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

const Filters = () => {
    return (
        <>
            <Select options={optionsLocation} placeholder="Location" />
            <SelectDate />
            <Select options={optionsGuests} placeholder="Guests" />
            <Select options={optionsPrice} placeholder="Price" />
        </>
    )
}

export default Filters;