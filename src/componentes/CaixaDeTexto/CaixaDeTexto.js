const CaixaDeTexto = (props) => {
    
    const aoAdcionar = (evento) => {
        props.aoMudar(evento.target.value)
        console.log(evento.target.value);
    }
    
    return(
        <section className="section-content">
            <label >{props.label}</label>
            <input type='text' placeholder={props.placeholder} onChange={(evento) => aoAdcionar(evento)}/>
        </section>
    )
}

export default CaixaDeTexto