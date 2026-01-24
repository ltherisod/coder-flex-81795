import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncMock"
import ItemList from "./ItemList"
const ItemListContainer = (props)=> {
    const {mensaje}=props
    const [data, setData]= useState([])
    // console.log('ItemListContainer', data)
    // console.log(getProducts())
    useEffect(()=>{
        getProducts()//pedimos datos
        .then((res)=> setData(res))//tratamos la respuesta y la guardamos
        .catch((error)=> console.log(error, 'error'))//atrapamos el error
    },[])
    // const miPromesa = new Promise((resolve, reject)=>{
    //     let todoOK= true
    //     //logica
    //     if(todoOK){
    //      resolve('salio todo joya')
    //     }else{
    //         reject('Hubo un error')
    //     }
    // })


    // console.log(miPromesa)
    // miPromesa.then((res)=> console.log(res), 'respuesta').catch((error)=> console.log(error, 'error'))
    return(
        <div>
            <h1>{mensaje}</h1>
            {/* {data.map((prod)=><p key={prod.id}>{prod.name}</p>)} */}
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer