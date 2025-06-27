
import React from 'react';
import './App.css';
import NombreApellido from './components/NombreApellido';
import DatosPersonales from './components/DatosPersonales';
import Estudios from './components/Estudios';
import CursosRealizados from './components/CursosRealizados';
import HabilidadesBlandas from './components/HabilidadesBlandas';
import Contacto from './components/Contacto';

function App() {
  return (
    <div className="App">
      <NombreApellido />
      <DatosPersonales />
      <Estudios/>
      <CursosRealizados/>
      <HabilidadesBlandas/>
      <Contacto/>

    </div>
  );
}

export default App;