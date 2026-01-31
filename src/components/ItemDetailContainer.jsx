import {useState, useEffect}from 'react'
import { getItem } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    useEffect(()=>{
        getItem('02')
        .then((res)=> setDetalle(res))
        .catch((error)=> console.log(error))
    },[])
  return (
    <div><ItemDetail detalle={detalle}/></div>
  )
}

export default ItemDetailContainer