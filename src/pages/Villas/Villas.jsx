import { useState } from 'react';
import { mock } from '../../data.mock.js';
import Card from '../../components/Card/Card.jsx';
import { Container, AllVillas } from './Villas.style.js';
import BottomPart from '../../components/BottomPart/BottomPart.jsx';
import Header from '../../components/Header/Header.jsx';
import ExtraFilters from '../../components/ExtraFilters/ExtraFilters.jsx';

const Villas = () => {
    const [showFilters, setShowFilters] = useState(false);
    
    const handleShow = () => {
        setShowFilters(!showFilters);
    }

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
                    onShowClick={handleShow}
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