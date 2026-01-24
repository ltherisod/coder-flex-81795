import { useState, useEffect } from "react"

const ItemCount = ()=> {
    // const [variableDeEstado, funcionModificadora]= useState(valorInicial)
    //REGLAS:
    // SIEMPRE DENTRO DE COMPONENTES
    //SE DECLARAN EN EL NIVEL SUPERIOR DEL COMPONENTE
    //NO SE DECLARAN CONDICIONALMENTE
    //VALORES INICIALES PUEDEN SER: STRING, NUMBER, OBJECT, BOOLEAN, ARRAY
    // NO SE HACE
    // if(user){
    //     const [count, setCount]= useState(1)
    // }else{
    //     const [variableDeEstado, funcionModificadora]= useState(valorInicial)
    // }
    const [count, setCount]= useState(1)
      const [compra, setCompra]= useState(false)
console.log('Contador')

const sumar = ()=> {
    // NO USAR
    // count = count +1
    // count ++
    setCount(count + 1)
}
const restar = ()=> {
    if(count > 0){

        setCount(count - 1)
    }
}
const comprar =()=> {
    setCompra(!compra)
}

// useEffect(()=> {
//     //CODIGO A EJECUTAR
// },[dependencias])


//sin el array de dependencias
//CASI NNUNCA/NUNCA SE USA ASI
useEffect(()=>{
    console.log('EL CODIGO SE EJECUTA SIEMPRE')
})


//CUANDO SE EJECUTA UNA SOLA VEZ, CON EL ARRAY DE DEPENDENCIAS VACIO //SE USA MUCHO
useEffect(()=>{
    console.log('EL CODIGO SE EJECUTA UNA SOLA VEZ, CUANDO SE MONTA EL COMPONENTE')
},[])

//CUANDO SE EJECUTA UNA VEZ Y ESTA A LA ESCUCHA DE UN CAMBIO (SE VEUVE A EJECUTAR)//se usa muchisimo
useEffect(()=>{
    console.log('EL CODIGO SE EJECUTA CUANDO MONTA EL COMPONENTE Y SIMPRE QUE CAMBIE LO QUE ESCUCHA', compra)
},[compra])


    return(
        <div>
            <button onClick={restar} className="btn btn-danger">-</button>
            <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
            <button className="btn btn-primary" onClick={comprar}>Comprar</button>
        </div>
    )
}

export default ItemCount