import { useState, useEffect  } from 'react';
import { useVillasData } from '../api/useVillasData.js';

export const useFilter = () => {
    const [villas] = useVillasData();
    const [optionsLocations, setOptionsLocations] = useState();
    const [optionsGuests, setOptionsGuests] = useState();
    const [optionsPrices, setOptionsPrices] = useState();

    useEffect(() => {
        const uniqueLocations = [... new Set(villas.map((villa) => villa.location.values).flat())];
        const locationsSelect = uniqueLocations.map((item, index) => ({value: index, label: item}));
        setOptionsLocations(locationsSelect);

        const uniqueGuests = [... new Set(villas.map((villa) => parseInt(villa.guests)))];
        const maxGuests = Math.max(...uniqueGuests);
        const guestsSelect = [];
        for (let i = 1; i <= maxGuests; i++) {
            guestsSelect.push({value: i, label: i === 1 ? `${i} guest` : `${i} guests`});
            };
        setOptionsGuests(guestsSelect);

        const uniquePrices = [... new Set(villas.map((villa) => villa.price).sort())];
        const pricesSelect = uniquePrices.map((item) => ({value: item, label: `From €${item} / daily`}));
        setOptionsPrices(pricesSelect);
    }, [villas]);

        return [optionsLocations, optionsGuests, optionsPrices];
}