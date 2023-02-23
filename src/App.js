import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {
const [colaboradores, setColaboradores] = useState([]);

const aoNovoColaborador = (colaborador)=>{
  setColaboradores([...colaboradores, colaborador])
  console.log(colaboradores)
} 

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador)}/>
      <Time nome="Programação"/>
    </div>
  );
}

export default App;
