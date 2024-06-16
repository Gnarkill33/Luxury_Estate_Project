import { mock } from '../../data.mock.js';
import Navbar from '../../components/NavBar/NavBar.jsx';
import Filters from '../../components/Filters.jsx'
import Card from '../../components/Card/Card.jsx';
import SearchButton from '../../components/SearchButton/SearchButton.jsx';
import { JoinButton } from '../../components/JoinWindow/JoinWindow.style.js';
import { FilterWrapper } from '../../components/MainSection/MainSection.style.js';
import { Container, Results, CardWrapper } from './Gallery.style.js';
import { JoinWindowTitle } from '../../components/JoinWindow/JoinWindow.style.js';
import Footer from '../../components/Footer/Footer.jsx';


const Gallery = () => {
    return (
        <Container>
            <Navbar />
            <JoinWindowTitle $textColor='var(--white)' $margin='5rem 0 3rem 0'>
                All Villas
                <Results>124 results</Results>
            </JoinWindowTitle>    
            <FilterWrapper $marginTop='3rem' $marginBottom='2rem'>
                <Filters />
                <SearchButton />
            </FilterWrapper>
            <JoinButton 
            $small $gold='var(--gold-gold-light)' 
            $transparent='transparent' 
            $margin='0 0 0 14rem'>
                ADD FILTERS
            </JoinButton>
            <CardWrapper>
                {mock.map((item) => {
                return <Card key={item.id} {...item} />
                })
                }
            </CardWrapper>
            <Footer />
        </Container>
     
    )
}

export default Gallery;