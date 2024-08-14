import Select from './Select';
import SelectDate from './SelectDate/SelectDate';
import { useFilter } from '../hooks/useFilter';

const Filters = () => {
    const [locations, guests, prices] = useFilter();

    return (
        <>  <SelectDate />
            <Select options={locations} placeholder="Location" />
            <Select options={guests} placeholder="Guests" />
            <Select options={prices} placeholder="Price" />
        </>
    )
}

export default Filters;