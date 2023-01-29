import Tabela from "./componentes/Tabela";
import "./app.css"
import isValid from "./models/validacao"
import CaixaDeMensagem from "./componentes/CaixaDeMensagem";
import { useState } from "react";


function App(props) {

  const [lista, setLista] = useState([])

  const handleSave = (objeto) => {
    let isvalid = isValid(objeto)
    setLista([...lista, {
      altura: isvalid.altura,
      peso: isvalid.peso,
      resultado: isvalid.resultado.toFixed(2),
      number: isvalid.number,
    }])
  }

  const mensagensPost = () => {
    return (
      <>
        {lista.map((valor) => <CaixaDeMensagem
          peso={valor.peso}
          altura={valor.altura}
          resultado={valor.resultado}
          number={valor.number}
        />)}
      </>
    )
  }



  return (
    <div className="App">
      <header>Tire seu IMC</header>
      <Tabela handleSave={(objeto) => handleSave(objeto)} />
      {mensagensPost()}
    </div>
  );
}

export default App;
