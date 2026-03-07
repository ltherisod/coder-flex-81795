import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
  const {cart, clear, removeItem, total}= useContext(CartContext)


  const preConfirm = ()=> {
    Swal.fire({
      title: '¿Estas seguro de borrar todo el carrito?',
      icon:'question',
      showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText:"No",
    confirmButtonText: "Si"
    }).then((result)=>{
      if(result.isConfirmed){
        Swal.fire(
          {
            title:'Borrado!',
            text:'Tu carrito esta vacio!',
            icon:'success'
          }
        )
        clear()
      }
    })
  }

  return (
    <div>
      <h1>Tu Carrito 🛒</h1>

    <div>
      {/* {
      // cart.map((compra)=> <CartItem key={compra.id} compra={compra}/>)
       
      } */}
      {
        cart.map((compra)=> (
          <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
            <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
            <span>{compra.name}</span>
            <span>${compra.price},00</span>
            <span>cantidad: {compra.quantity}</span>
            <span>total: ${compra.quantity * compra.price},00</span>
            <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
          </div>
        ))
      }
    </div>
    {/* //aca se llama a la funcion total desde el contexto */}
    <span>Total a pagar : ${total()},00</span>
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
      <button className='btn btn-danger' onClick={preConfirm}>Vaciar carrito</button>
      <Link className='btn btn-success' to='/checkout'>Terminar compra</Link>
    </div>
    </div>
  )
}

export default CartView