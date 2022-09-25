import React, { Fragment, useState } from 'react'
import Campos from './Vistas/Campos';
import Estudiante from './Componentes/Estudiante';

function App() {

  const [estudiantes, guardarEstudiante] = useState([]);

  const crearEstudiante = estudiante => {
    guardarEstudiante([
      ...estudiantes,
      estudiante
    ])
  }

  //Funcion para Eliminar
  const eliminarEstudiante = codigo =>{
    console.log(codigo)
  }

  return (
    <Fragment>
      <h2 data-text="&nbsp;♠️ Datos Del Estudiante ♣️&nbsp;">&nbsp;♠️ <span>Datos </span>Del<span> Estudiante</span> ♣️</h2>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Campos
              crearEstudiante={crearEstudiante}
            />
          </div>
          <div className='one-half column'>
            <h2>Administrar Estudiantes</h2>
            {estudiantes.map(estudiante => (
              <Estudiante
                key={estudiante.codigo}
                estudiante={estudiante}
                eliminarEstudiante={eliminarEstudiante}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;