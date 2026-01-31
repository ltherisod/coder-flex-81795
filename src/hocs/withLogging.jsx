import { useEffect } from "react"

//Esta es la funcion HOC
export const withLogging = (WrappedComponent)=> {
    //Este es el nuevo componente que se crea cada vez que llamo al HOC
    const ComponentWithLogging = (props)=> {
        //Este efecto se ejecuta cuando el componente aparece en pantalla "funcionalidad"
        useEffect(()=>{
            console.log(`${WrappedComponent.name} se montó 🥳`)
        },[])
        //retornar el componente original, con todas sus props
        return(
                <WrappedComponent {...props}/>
        )
    }

//devolviendo el nuevo componente
    return ComponentWithLogging
}