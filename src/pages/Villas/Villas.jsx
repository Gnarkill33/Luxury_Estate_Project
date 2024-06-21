import { mock } from '../../data.mock.js';
import Card from '../../components/Card/Card.jsx';
import { JoinButton } from '../../components/JoinWindow/JoinWindow.style.js';
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
                $marginBottom/>
            <JoinButton 
                $small $gold='var(--gold-gold-light)' 
                $transparent='transparent' 
                $margin='0 0 0 14rem'>
                ADD FILTERS
            </JoinButton>
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