
const BotonMultiuso = (props)=> {
const {texto}= props
    console.log(props, 'props')

    return(
        <button 
        style={{backgroundColor:props.color, padding:'10px 20px', border:'none', cursor:"pointer"}}
        onClick={props.onClickFunction}
        >{texto}</button>
    )
}

export default BotonMultiuso

