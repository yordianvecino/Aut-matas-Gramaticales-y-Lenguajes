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

  const titulo = estudiantes.length === 0 ? '' : 'Administrar Estudiantes';

  //Funcion para Eliminar
  const eliminarEstudiante = codigo =>{
    const nuevoEstudiante = estudiantes.filter(estudiantes => estudiantes.codigo !== codigo);
    guardarEstudiante(nuevoEstudiante)
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
            <h2>{titulo}</h2>
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