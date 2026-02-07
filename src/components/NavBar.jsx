
//import css
import '../assets/css/NavBar.css'
//imagenes
//SRC
import logoReact from '../assets/react.svg'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'


const NavBar = ()=> {
    console.log('navbar')
    return (
        <nav className='nav-container'>
            <NavLink className='anchor-nav' to="/">
                {/* imagen SRC */}
                {/* <img src={logoReact} alt='logo react' /> */}
                {/* IMAGEN PUBLIC */}
                <img src={'../vite.svg'} alt='logo vite'/>
            </NavLink>
            <NavLink className='anchor-nav' to="/category/nuevos">Nuevos</NavLink>
            <NavLink className='anchor-nav' to="/category/ofertas">Ofertas</NavLink>
            <NavLink className='anchor-nav' to="/category/mas vendidos">Mas Vendidos</NavLink>
            <CartWidget/>
        </nav>
    )
}

export default NavBar