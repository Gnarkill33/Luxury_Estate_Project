import { useState, useEffect } from "react";

export const useExtraFiltersData = () => {
    const [extraFiltersData, setExtraFiltersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ('http://localhost:3000/extrafilters');
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const json = await response.json();
                setExtraFiltersData(json);
            } catch (error) {
                console.log("Failed to fetch data", error);
            };
        };
        fetchData();
    }, []);

    return [extraFiltersData];
}