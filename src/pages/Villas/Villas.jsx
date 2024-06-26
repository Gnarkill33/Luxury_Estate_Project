import { mock } from '../../data.mock.js';
import Card from '../../components/Card/Card.jsx';
import { Container, AllVillas } from './Villas.style.js';
import BottomPart from '../../components/BottomPart/BottomPart.jsx';
import Header from '../../components/Header/Header.jsx';

const Villas = () => {
    return (
        <>
        <Container>
            <Header
                type='secondary' 
                $marginTop 
                $marginBottom /> 
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