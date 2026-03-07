import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'
import { useForm } from 'react-hook-form'


const CheckoutRHF = () => {
   
    const [orderId, setOrderId]= useState('')
    const [loading, setLoading]= useState(false)
   const {register, handleSubmit, formState:{errors}, getValues}= useForm()
    const {cart, total, clear}= useContext(CartContext)


    const terminarCompra = (data)=> {
      
       const {name, lastname, address, email}=data
        setLoading(true)
         let orden={
            comprador:{
                name,
                lastname,
                address,
                email
            },
            carrito: cart,
            total: total(),
            fecha: serverTimestamp()
        }

        const orderColl = collection(db, "orders")
        //agrego el doc
        addDoc(orderColl, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
       
    }

    if(!cart.length && !orderId){
        return <EmptyCart/>
    }

  return (
    <>
    {
        orderId 
        ? <div>
            <h1>Muchas gracias por tu compra! 🥳</h1>
            <h3>Su orden es: {orderId}</h3>
            <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
        : <div>
        <h1>Completa con tus datos</h1>
       
        <form className='p-4 border rounded shadow-sm bg-light' onSubmit={handleSubmit(terminarCompra)}>
                <input name='name' placeholder='Ingrese su nombre' className='form-control' type="text"  {...register("name", {required:true, minLength:3})}/>
                {errors?.name?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
                 {errors?.name?.type === "minLength" && <small style={{color:'red'}}>El campo debe contener mínimo 3 caracteres</small>}
                <input name='lastname' placeholder='Ingrese su apellido' className='form-control' type="text" {...register("lastname", {required:true, minLength:2})}/>
                 {errors?.lastname?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
                 {errors?.lastname?.type === "minLength" && <small style={{color:'red'}}>El campo debe contener mínimo 2 caracteres</small>}
                <input name='address' placeholder='Ingrese su dirección' className='form-control' type="text" {...register("address", {required:true, minLength:10, maxLength:35})} />
                 {errors?.address?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
                 {errors?.address?.type === "minLength" && <small style={{color:'red'}}>El campo debe contener mínimo 10 caracteres</small>}
                  {errors?.address?.type === "maxLength" && <small style={{color:'red'}}>La dirección es demasiado larga</small>}
                <input name='email' placeholder='Ingrese su correo' className='form-control' type='email' {...register("email", {required:true})}/>
                 {errors?.email?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
                <input name='secondemail' placeholder='Repita su correo' className='form-control' type="email"  {...register("secondemail", {required:true, validate:{equalsMails : mail2 => mail2 === getValues().email}})}/>
                {errors?.secondemail?.type === "required" && <small style={{color:'red'}}>Por favor complete el campo</small>}
                 {errors?.secondemail?.type === "equalsMails" && <small style={{color:'red'}}>Los correos no coinciden</small>}
                <button type='submit' className='btn btn-success' disabled={loading}>{loading ? 'Procesando la orden' :  'Generar Orden'}</button>
        </form>
    </div>

    }
    </>
  )
}

export default CheckoutRHF