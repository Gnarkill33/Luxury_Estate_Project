import { useState, useEffect  } from 'react';
import { mock } from '../data.mock.js';

export const useFilter = () => {
    const [optionsLocations, setOptionsLocations] = useState([]);
    const [optionsGuests, setOptionsGuests] = useState([]);
    const [optionsPrices, setOptionsPrices] = useState([]);

    useEffect(() => {
        const uniqueMockLocations = [... new Set(mock.map((villa) => villa.location.values).flat())];
        const mockLocationsSelect = uniqueMockLocations.map((item, index) => ({value: index, label: item}));
        setOptionsLocations(mockLocationsSelect);

        const uniqueMockGuests = [... new Set(mock.map((villa) => parseInt(villa.guests)))];
        const maxMockGuests = Math.max(...uniqueMockGuests);
        const mockGuestsSelect = [];
        for (let i = 1; i <= maxMockGuests; i++) {
            mockGuestsSelect.push({value: i, label: i === 1 ? `${i} guest` : `${i} guests`});
            };
        setOptionsGuests(mockGuestsSelect);

        const uniqueMockPrices = [... new Set(mock.map((villa) => parseInt(villa.price.match(/\d+/))).sort())];
        const mockPricesSelect = uniqueMockPrices.map((item) => ({value: item, label: `From €${item} / daily`}));
        setOptionsPrices(mockPricesSelect);
    }, []);

        return [optionsLocations, optionsGuests, optionsPrices];
}

