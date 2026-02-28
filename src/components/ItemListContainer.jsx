import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

import Loader from "./Loader"
const ItemListContainer = (props)=> {
    const {mensaje}=props
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const {type}= useParams()
   
    useEffect(()=>{
        setLoading(true)
        getProducts()//pedimos datos
        .then((res)=>{
            if(type){
                //filtro
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        } )//tratamos la respuesta y la guardamos
        .catch((error)=> console.log(error, 'error'))//atrapamos el error
        .finally(()=> setLoading(false))
        //esta a la escucha del cambio de categoria
    },[type])
    
    return(
        <>
        {
            loading 
            ? <Loader text={type ? 'Cargando Categoría' : 'Cargando todos los productos'}/>
            :<div>
            <h1>{mensaje}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data}/>
        </div>
        }
        </>
        
    )
}
export default ItemListContainer