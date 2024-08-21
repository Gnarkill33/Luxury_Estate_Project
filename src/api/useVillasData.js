import { useEffect, useState } from 'react';

export const useVillasData = () => {
    const [villasData, setVillasData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/villas");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const json = await response.json();
            setVillasData(json);
        } catch (error) {
            console.log("Failed to fetch data", error);
        };
            setLoading(false);
    }
    fetchData();
}, []);

    return [villasData, loading];
};