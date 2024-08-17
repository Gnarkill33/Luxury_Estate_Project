import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import Card from '../../components/Card/Card.jsx';
import { Container, AllVillas } from './Villas.style.js';
import BottomPart from '../../components/BottomPart/BottomPart.jsx';
import Header from '../../components/Header/Header.jsx';
import ExtraFilters from '../../components/ExtraFilters/ExtraFilters.jsx';


const Villas = () => {
    const [villas, loading] = useFetch();
    
    useEffect(() => {
        if (villas.length) {
            setFilteredVillas(villas);
            setFilteredVillasNumber(villas.length);
        }
    }, [villas]);

    const [showFilters, setShowFilters] = useState(false);
    const [chosenFilters, setChosenFilters] = useState([]);
    const [filteredVillas, setFilteredVillas] = useState(villas);
    const [filteredVillasNumber, setFilteredVillasNumber] = useState(villas.length);

    const handleShow = () => {
        setShowFilters(!showFilters);
    }

    const addFilterHandler = (value, category) => {
        if (chosenFilters.some(filter => filter.value === value)) {
            setChosenFilters(prev => prev.filter(element => element.value !== value));
        } else {
            setChosenFilters(prev => [...prev, {
                value, 
                category,
            }]
            )
        };
    }

    const resetFiltersHandler = () => {
        setChosenFilters([])
        setFilteredVillas(villas);
        setFilteredVillasNumber(villas.length);
    }

    const filteredVillasHandler = () => {
        const filteredVillas = villas.filter(function(villa) {
            let returnedVilla;
            chosenFilters.forEach((filter) => {
                if (villa[filter.category].values.includes(filter.value)) {
                    returnedVilla = villa;
                };
            });
            return returnedVilla
        });                
        setFilteredVillas(filteredVillas);
        setFilteredVillasNumber(filteredVillas.length);
    };

    useEffect(() => {
        if (chosenFilters.length) {
        filteredVillasHandler();
        }
    }, [chosenFilters]);

    if (loading) {
        return <p>Loading...</p>
    }
    
    return (
        <>
            <Container>
                <Header
                    type='secondary' 
                    $marginTop 
                    $marginBottom 
                    onShowClick={handleShow}
                />
                {showFilters && 
                    <ExtraFilters 
                        onShow={handleShow}
                        chosenFilters={chosenFilters}
                        onSetFilter={addFilterHandler}
                        onResetFilters={resetFiltersHandler}
                        filteredVillasHandler={filteredVillasHandler}
                        filteredVillasNumber={filteredVillasNumber}
                    />
                }
                <AllVillas>
                    {filteredVillas.map((item) => {
                        return <Card key={item.id} {...item} />
                    })}
                </AllVillas>
            </Container>
            <BottomPart/>
        </>     
    )
}

export default Villas;