import './App.css'
import './css_reset.css'
import List from './components/List/List';
import Header from './components/Header/Header';
import Catalogue from './components/Catalogue/Catalogue';
import Specialities from './components/Specialities/Specialities';



function App() {
    return (
        <>
            < Header />
            < List />
            < Catalogue />
            < Specialities />
        </>
    )
}

export default App
