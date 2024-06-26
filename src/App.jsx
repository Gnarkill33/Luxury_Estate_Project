import './App.css'
import './css_reset.css'
import './index.css'
import './App.style.js'
import List from './components/List/List';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Specialities from './components/Specialities/Specialities';
import About from './components/About/About';
import BottomPart from './components/BottomPart/BottomPart';
import { Container } from './App.style.js';

const App = () => {
    return (
        <>
        <Container>
            < Header type='primary' />
        </Container>
            < List />
            < Catalog />
            < Specialities />
            < About />
            < BottomPart />
        </>
    )
}

export default App