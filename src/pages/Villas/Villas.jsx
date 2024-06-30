import { useState } from 'react';
import { mock } from '../../data.mock.js';
import Card from '../../components/Card/Card.jsx';
import { Container, AllVillas } from './Villas.style.js';
import BottomPart from '../../components/BottomPart/BottomPart.jsx';
import Header from '../../components/Header/Header.jsx';
import ExtraFilters from '../../components/ExtraFilters/ExtraFilters.jsx';

const Villas = () => {
    const [show, setShow] = useState(false);
    
    const onShowClick = () => {
        setShow(!show);
    }

    return (
        <>
        <Container>
            <Header
                type='secondary' 
                $marginTop 
                $marginBottom 
                onShowClick={onShowClick}/>
                    {show 
                    ? <ExtraFilters
                        onShowClick={onShowClick}
                        />
                    : null}
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