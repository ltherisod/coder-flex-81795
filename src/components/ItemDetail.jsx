import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detalle}) => {
  //funcion que a futuro va a agregar el item al carrito (CONTEXT)
  const onAdd = (cantidad)=> {
    console.log(`Agregas al carrito ${cantidad} unidades de ${detalle.name}`)
  }
  return (
      <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
      <h1>Detalle de {detalle.name}</h1>
      <img src={detalle.img} alt={detalle.name}/>
      <p>{detalle.description}</p>
      <p>${detalle.price},00</p>
      <p>Stock disponible: {detalle.stock} unidades</p>
      <ItemCount onAdd={onAdd} stock={detalle.stock}/>
    </div>
  )
}

export default ItemDetail