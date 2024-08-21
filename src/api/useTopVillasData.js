import { useEffect, useState } from 'react';

export const useTopVillasData = () => {
    const [topVillasData, setTopVillasData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('http://localhost:3000/topvillas');
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const json = await response.json();
                setTopVillasData(json);
            } catch (error) {
                console.log("Failed to fetch data", error);
            }
        };
        fetchData();
    }, []); 

    return [topVillasData];
}