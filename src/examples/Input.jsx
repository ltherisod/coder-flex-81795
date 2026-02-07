import React, { useState } from 'react'

const Input = () => {
    const [name, setName]= useState('')

    const inputHandler = (event)=> {
        console.log(event, 'evento')
         console.log(event.target, 'target')
         console.log(event.target.value, 'value')
         setName(event.target.value)
    }
    const noVocales = (e)=>{
        console.log(e.key,'evento')
        if('aeiou'.includes(e.key.toLowerCase())){
            console.log('es vocal!')
            e.preventDefault()
        }
    }
  return (
    <div>
        <h1>Input</h1>
        <input className='form-control' name='nombre-completo' type='text' placeholder='ingresa tu nombre completo' onChange={inputHandler}/>
        <p>{name}</p>
        <h2>NO VOCALES</h2>
         <input className='form-control' name='no-vocales' type='text' placeholder='NO SE ACEPTAN VOCALES' onKeyDown={noVocales} />
    </div>
  )
}

export default Input