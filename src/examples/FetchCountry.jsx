import {useEffect} from 'react'
import { useFetch } from '../hooks/useFetch'

const FetchCountry = () => {
  const {data, loading, error}= useFetch('https://restcountries.com/v3.1/name/chile')
    // useEffect(()=>{
    //     fetch('https://restcountries.com/v3.1/name/chile')//pedir datos
    //     .then((response)=> response.json())//traducir
    //     .then((data)=> console.log(data[0].flag))
    //     .catch((error)=> console.log(error))
    // },[])

console.log({data:data && data[0]?.flag, loading, error})

  return (
    <div>FetchCountry</div>
  )
}

export default FetchCountry