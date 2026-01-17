import { useState } from "react"

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
    return(
        <div>
            <button onClick={restar}>-</button>
            <span>{count}</span>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount