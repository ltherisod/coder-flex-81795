import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h1>Tu carrito esta vacio!! 😱</h1>
        <h2> Te invitamos a ver nuestro productos</h2>
        <Link className='btn btn-dark' to='/'>Ir a Home</Link>
    </div>
  )
}

export default EmptyCart