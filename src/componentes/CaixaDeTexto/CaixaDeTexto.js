const CaixaDeTexto = (props) => {
    
    const aoAdcionar = (evento) => {
        props.aoMudar(evento.target.value)
    }
    
    return(
        <>
            <label>{props.label}</label>
            <input type='text' placeholder={props.placeholder} onChange={(evento) => aoAdcionar(evento)}/>
        </>
    )
}

export default CaixaDeTexto