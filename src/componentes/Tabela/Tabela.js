import { useState } from "react"
import isValid from "../../models/validacao"

import CaixaDeTexto from "../CaixaDeTexto"
import ItensTabela from "../ItensTabela/ItensTabela"
import "./Tabela.css"

const Tabela = (props) => {
    const pesos = [
        'menos do que 18.5',
        'entre 18.5 e 24,9',
        'entre 25 e 29.9',
        'entre 30 e 34.9',
        'entre 35 e 39.9',
        'main de 40',
      ]
      const imcs = [
        'abaixo do peso',
        'peso normal',
        'sobrepeso',
        'obesidade grau 1',
        'obesidade grau 2',
        'obesidade grau 3',
      ]

    const [peso, setPeso] = useState()
    const [altura, setAltura] = useState()
    const [lista, setLista] = useState([])
   
    const aoSalvar = (event) => {
        event.preventDefault();
        setLista([...lista,{
            peso,
            altura,
        }])
        validacao(lista)
        
    }


    const validacao = (lista) => {
        lista.map((objeto) => isValid(objeto))
    }
    
   
    

    return(
        <section className="section-content">
            <div className="tabela-content">
                
                <form>
                    <label>IMC</label>
                    {pesos.map((chave) => <ItensTabela key={chave} peso={chave}/>)}
                </form>
                <form>
                    <label>RESULTADO</label>
                    {imcs.map((chave) => <ItensTabela key={chave} peso={chave}/>)}  
                </form>
            </div>
            <div className="text-field">
                <form onSubmit={(event) => aoSalvar(event)}>
                    <CaixaDeTexto label="seu peso" placeholder="digite seu peso" aoMudar={(event) => setPeso(event)} />
                    <CaixaDeTexto label="sua altura" placeholder="digite sua altura" aoMudar={(event) => setAltura(event)}/>
                    <button>enviar</button>
                </form>
            </div>
            
        </section>
    )
}

export default Tabela

