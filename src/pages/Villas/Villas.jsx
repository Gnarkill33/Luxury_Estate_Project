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
    
    const handleShow = () => {
        setShowFilters(!showFilters);
    }

    const addFilterHandler = (filter) => {
        if (chosenFilters.includes(filter)) {
            setChosenFilters(prev => prev.filter(el => el !== filter))
        } else {
            setChosenFilters(prev => [...prev, filter])
        }
    }

    const resetFiltersHandler = () => {
        setChosenFilters([])
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