import React from 'react'

const Estudiante = ({estudiante, eliminarEstudiante}) => (
    <main className="estudiante">
        <p>Nombre: <span>{estudiante.usuario.campo}</span></p>
        <p>Codigo: <span>{estudiante.codigo.campo}</span></p>
        <p>Fecha: <span>{estudiante.fecha.campo}</span></p>
        <p>Direccion: <span>{estudiante.direcion.campo}</span></p>
        <p>Telefono Fijo: <span>{estudiante.telefono_f.campo}</span></p>
        <p>Telefono Clular: <span>{estudiante.telefono_C.campo}</span></p>
        <p>Correo: <span>{estudiante.correo.campo}</span></p>
        <button
            className="button eliminar u-full-width"
            onClick={() => eliminarEstudiante(estudiante.codigo)}
        >Eliminar &times;</button>
    </main>
);

export default Estudiante;