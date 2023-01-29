import "./CaixaDeMensagem.css"

const CaixaDeMensagem = (props) => {
    const listaMensagens = [
        'Déficit de peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3']

    return (
        <p className="mensagem" >seu peso é: {props.peso}kg, sua altura é: {props.altura}cm, seu imc é: {props.resultado} e voce esta com: {listaMensagens[props.number -1]}</p>
    )
}

export default CaixaDeMensagem