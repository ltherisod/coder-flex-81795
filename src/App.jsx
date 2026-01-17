
import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
//import de componentes
// import BotonMultiuso from "./examples/BotonMultiuso"
import NavBar from "./components/NavBar"

function App() {

  // const saludar = ()=> {
  //   alert('Holis!')
  // }

  // const despedir = ()=> {
  //   console.log('Chau chau adios')
  // }
  console.log('App')
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje='Bienvenidos a mi App!'/>
    {/* NO ENTRA EN LA PRIMER PRE ENTREGA */}
    {/* <ItemCount/> */}
     {/* <BotonMultiuso texto="Hola" color='red' onClickFunction={saludar}/>
     <BotonMultiuso texto="Chau" color='green' onClickFunction={despedir}/> */}
    </>
  )
}

export default App
