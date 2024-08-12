import { useState, useEffect } from 'react';
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
    const [filteredVillasNumber, setFilteredVillasNumber] = useState(mock.length);

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
        setFilteredVillas(mock);
        setFilteredVillasNumber(mock.length);
    }

    const filteredVillasHandler = () => {
        const filteredVillas = mock.filter(function(villa) {
            let returnedVilla;
            chosenFilters.forEach((filter) => {
                if (villa[filter.category].values.includes(filter.value)) {
                    returnedVilla = villa;
                };
            });
            return returnedVilla
        });                
        setFilteredVillas(filteredVillas);
    };

    const showNumberHandler = () => { 
        // const filteredVillas = prev.filter(function(villa) {
        //     let returnedVilla;
        //     chosenFilters.forEach((filter) => {
        //         if (villa[filter.category].values.includes(filter.value)) {
        //             returnedVilla = villa;
        //         };
        //     });
        //     return returnedVilla
        // });
        const filteredVillas = mock.filter(function(villa) {
            let returnedVilla;
            chosenFilters.forEach((filter) => {
                if (villa[filter.category].values.includes(filter.value)) {
                    returnedVilla = villa;
                };
            });
            return returnedVilla
        });
        // debugger;
        // filteredVillasHandler(prev => prev.length);
        // debugger;
        setFilteredVillasNumber(filteredVillas.length);
        console.log(`Массив вилл: ${filteredVillas}`, `длина массива: ${filteredVillas.length}`);
    }

    useEffect(() => {
        console.log(filteredVillas.length, 'useEffect')
    }, [filteredVillas]);
    
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
                        onClickShowNumber={showNumberHandler}                        
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