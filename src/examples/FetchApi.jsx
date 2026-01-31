import React, { useEffect, useState } from 'react'
import FetchList from './FetchList'
import { useFetch } from '../hooks/useFetch'

const FetchApi = () => {
  const {data:personajes, loading, error}= useFetch('https://rickandmortyapi.com/api/character')
    // const [personajes, setPersonajes]= useState([])
    // useEffect(()=>{
    //     fetch('https://rickandmortyapi.com/api/character') //pedir los datos de los personajes
    //     .then((res)=> res.json())//traducir
    //     .then((info)=> setPersonajes(info.results))//guardar el array en el estado para poder usarlo
    //     .catch((error)=> console.log(error))
    // },[])
    // console.log(personajes)
  return (
    <div>
       <h2>FetchApi</h2>
       {loading ? <p>'Cargando personajes</p> :   <FetchList personajes={personajes}/> } 
     
    </div>
  )
}

export default FetchApi