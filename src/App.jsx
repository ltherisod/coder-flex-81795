
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBarBS from './components/NavBarBS';

function App() {


  console.log('App')
  return (
    <>
    
    <NavBarBS/>
    <ItemListContainer mensaje='Bienvenidos a mi App!'/>
    {/* NO ENTRA EN LA PRIMER PRE ENTREGA */}
    {/* <ItemCount/> */}
     
    </>
  )
}

export default App
