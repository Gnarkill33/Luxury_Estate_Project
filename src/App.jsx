import './App.css'
import './css_reset.css'
import List from './components/List/List';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Specialities from './components/Specialities/Specialities';



function App() {
    return (
        <>
            < Header />
            < List />
            < Catalog />
            < Specialities />
        </>
    )
}

export default App
