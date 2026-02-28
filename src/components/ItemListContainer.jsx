import { useState, useEffect } from "react"
import { getProducts, productos } from "../mock/asyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

import Loader from "./Loader"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
const ItemListContainer = (props)=> {
    const {mensaje}=props
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const {type}= useParams()
   
    //FIREBASE
      useEffect(()=>{
        setLoading(true)
        //CONECTARNOS A NUESTRA COLECCION
        const prodColl= type ? query(collection(db, "productos"),where("category", "==", type)) :collection(db, "productos")
        //pedir docs
        getDocs(prodColl)
        .then((res)=>{
            //limpiar data
           const list = res.docs.map((doc)=>{
            return {
                id:doc.id,
                ...doc.data()
            }
           })
           //console.log(list)
           setData(list)
        })
        .catch((error)=> console.log(error, 'error'))//atrapamos el error
        .finally(()=> setLoading(false))
        //esta a la escucha del cambio de categoria
    },[type])
    //PROMESA
    // useEffect(()=>{
    //     setLoading(true)
    //     getProducts()//pedimos datos
    //     .then((res)=>{
    //         if(type){
    //             //filtro
    //             setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             setData(res)
    //         }
    //     } )//tratamos la respuesta y la guardamos
    //     .catch((error)=> console.log(error, 'error'))//atrapamos el error
    //     .finally(()=> setLoading(false))
    //     //esta a la escucha del cambio de categoria
    // },[type])

    // const subirDataAFirebase = ()=>{
    //     console.log('SUBIENDO DATA...')
    //     const prodCollec=collection(db, 'productos')
    //     productos.map((prod)=> addDoc(prodCollec, prod))
    // }
    
    return(
        <>
        {
            loading 
            ? <Loader text={type ? 'Cargando Categoría' : 'Cargando todos los productos'}/>
            :<div>
                {/* <button onClick={subirDataAFirebase}>SUBIR DATA</button> */}
            <h1>{mensaje}{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data}/>
        </div>
        }
        </>
        
    )
}
export default ItemListContainer