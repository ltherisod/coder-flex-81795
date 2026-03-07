import { createContext, useEffect, useState } from "react";

//DEFINI EL CONTEXTO (1)
export const CartContext = createContext();

const carritoLS = JSON.parse(localStorage.getItem('carrito')) || []

//DECLARO AL PROVEEDOR (2)
export const CartProvider = ({children})=> {
    const [cart, setCart]= useState(carritoLS)
    //Las herramientas (funciones)


    useEffect(()=>{
        localStorage.setItem('carrito', JSON.stringify(cart))
    },[cart])

    //AGREGAR UN ITEM AL CARRITO CONTEMPLAR REPETIDOS.
    const addItem = (item, qty)=> {
        // console.log({...item, quantity:qty})
        if(isInCart(item.id)){
            // console.log('ya existe')
            setCart(
                cart.map((prod)=> {
                    if(prod.id === item.id){
                        //sumar cantidades
                        return {...prod, quantity: prod.quantity + qty}
                    }else{
                        //retorno los que no son sin modificarlos
                        return prod
                    }
                })
            )
        }else{
            //no existe en el carrito
            setCart([...cart, {...item, quantity:qty}])
        }
    }

    //borrar todo el carrito
    const clear = ()=> {
        setCart([])
    }

    //ELIMINAR UN ITEM ESPECIFICO
        const removeItem = (id)=> {
            setCart(cart.filter((prod)=> prod.id !== id))
        }

        //devolver un bool si esta o no en el carrito

        const isInCart = (id)=>{
            return cart.some((prod)=> prod.id === id)
        }

        // Cantidad total de item
        const cartQty = ()=> {
            return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
        }

        //total a pagar
        const total = ()=> {
            return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0)
        }
           //total a pagar
        const totalConImp = ()=> {
            return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0.5)
        }

        //OPCIONAL
        const itemQuantity = (id)=>{
            const inCart = cart.find((prod)=> prod.id === id )
            if(inCart){
                return inCart.quantity
            }else{
                return 0
            }
        }

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, itemQuantity, total, cartQty}}>
            {children}
        </CartContext.Provider>
    )
}
