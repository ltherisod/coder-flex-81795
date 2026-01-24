const ItemListContainer = (props)=> {
    const {mensaje}=props
    console.log('ItemListContainer')
    return(
        <div>
            <h1>{mensaje}</h1>
        </div>
    )
}
export default ItemListContainer