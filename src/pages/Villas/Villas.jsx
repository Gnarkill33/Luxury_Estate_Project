import { useState } from 'react';
import { mock } from '../../data.mock.js';
import Card from '../../components/Card/Card.jsx';
import { Container, AllVillas } from './Villas.style.js';
import BottomPart from '../../components/BottomPart/BottomPart.jsx';
import Header from '../../components/Header/Header.jsx';
import ExtraFilters from '../../components/ExtraFilters/ExtraFilters.jsx';

const Villas = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [chosenFilters, setChosenFilters] = useState([]);
    const [filteredVillas, setFilteredVillas] = useState(mock);
    
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
        console.log(chosenFilters)
    }

    const resetFiltersHandler = () => {
        setChosenFilters([])
    }

    const filteredVillasHandler = () => {
        // const values = mock.map(villa => villa.values);
        const filteredVillas = mock.filter(function(villa) {
            // console.log(Object.values(filter.category))
                chosenFilters.forEach((filter) => {
                    const array = (Object.values(villa[filter.category]));
                    console.log(array)
                    // let values = villa[filter.category].values;
                    // if (villa[filter.category][array].includes(filter.value))
                    if (array.includes(filter.value))
                    return villa;
                    // villa["wellness"]
            
                    // console.log(villa[filter.category])
                    // villa[filter.category] - объект конкретной виллы с массивом values
                    // filter.value - строка
                            });
                 })
                 setFilteredVillas(filteredVillas);
                 console.log(filteredVillas)
        };

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
                    />
                }
                <AllVillas>
                    {mock.map((item) => {
                        return <Card key={item.id} {...item} />
                    })}
                </AllVillas>
            </Container>
            <BottomPart/>
        </>     
    )
}

export default Villas;