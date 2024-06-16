import './App.css'
import './css_reset.css'
import './index.css'
import List from './components/List/List';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Specialities from './components/Specialities/Specialities';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            < Header />
            < List />
            < Catalog />
            < Specialities />
            < Footer />
        </>
    )
}

export default App