import {useState, useEffect}from 'react'
import { getItem } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import { TbRubberStampOff } from 'react-icons/tb'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando]= useState(true)
    const [notExist, setNotExist]= useState(null)
    // const param =useParams()
    // console.log(param.id)
    const {id} =useParams()
    
//FIREBASE
 useEffect(()=>{
       const docRef = doc(db, "productos", id)
       getDoc(docRef)
       .then((res)=> {
        if(res.data()){
          //seteo el prod
          setDetalle({id: res.id, ...res.data()})
        }else{
          setNotExist(true)
        }
       })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[id])

    //PROMESA
    // useEffect(()=>{
    //     getItem(id)
    //     .then((res)=> setDetalle(res))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setCargando(false))
    // },[id])

if(notExist){
  return (
    <div>
      <h2>El producto no Existe!</h2>
      <Link className='btn btn-dark' to='/'>Volver a Home</Link>
    </div>
  )
}

  return (
    <div>
      {
        cargando 
        ? <Loader text='Cargando detalle del producto'/>
        : <ItemDetail detalle={detalle}/>
      }
    </div>
  )
}

export default ItemDetailContainer