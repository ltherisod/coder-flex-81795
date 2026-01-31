
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';
import FetchCountry from './examples/FetchCountry';
import FetchApi from './examples/FetchApi';
import { withLogging } from './hocs/withLogging';
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
const FetchCountryHOC = withLogging(FetchCountry)
const ContadorConHoc = withLogging(ItemCount)
const ItemLContHOC= withLogging(ItemListContainer)

  console.log('App')
  return (
    <>
    
    <NavBarBS/>
    {/* <FetchApi/> */}
    {/* <ItemListContainer mensaje='Bienvenidos a mi App!'/> */}
    <ItemDetailContainer/>
    {/* <ItemLContHOC mensaje='Bienvenidos a mi HOC!'/> */}
    {/* <FetchCountryHOC/> */}
    {/* <ContadorConHoc/> */}
    {/* <FetchCountry/> */}
    {/* NO ENTRA EN LA PRIMER PRE ENTREGA */}
    {/* <ItemCount/> */}
     
    </>
  )
}

export default App
