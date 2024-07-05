import { useState } from 'react';
import { mock } from '../../data.mock.js';
import Card from '../../components/Card/Card.jsx';
import { Container, AllVillas } from './Villas.style.js';
import BottomPart from '../../components/BottomPart/BottomPart.jsx';
import Header from '../../components/Header/Header.jsx';
import ExtraFilters from '../../components/ExtraFilters/ExtraFilters.jsx';

const Villas = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [filterName, setFilterName] = useState('');
    const [savedFilters, saveFilterName] = useState([]);
    
    const handleShow = () => {
        setShowFilters(!showFilters);
    }

    const handleSetFilterName = (event) => {
        setFilterName(event);
        saveFilterName([...savedFilters, filterName]);
        console.log(savedFilters);
    }

    // const handleSaveFilterName = () => {
    //     saveFilterName([...savedFilters, filterName]);
    //     console.log(savedFilters);
    // }

    return (
        <>
        <Container>
            <Header
                type='secondary' 
                $marginTop 
                $marginBottom 
                onShowClick={handleShow}/>
                {showFilters && 
                    <ExtraFilters 
                    onShow={handleShow}
                    onSetFilterName={handleSetFilterName}
                    // onSaveFilterName={handleSaveFilterName}
                    value={filterName}
                    />
                }
                <AllVillas>
                    {mock.map((item) => {
                        return <Card key={item.id} {...item} />
                        })
                    }
                </AllVillas>
        </Container>
        <BottomPart />
        </>     
    )
}

export default Villas;