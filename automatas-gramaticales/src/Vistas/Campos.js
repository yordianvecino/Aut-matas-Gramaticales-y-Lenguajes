import React, { useState } from 'react'
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../Elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../Componentes/Input';

const Campos = ({crearEstudiante}) => {
  const [usuario, cambiarUsuario] = useState({ campo: '', valido: null });
  const [codigo, cambiarCodigo] = useState({ campo: '', valido: null });
  const [fecha, cambiarFecha] = useState({ campo: '', valido: null });
  const [direcion, cambiarDirecion] = useState({ campo: '', valido: null });
  const [telefono_f, cambiarTelefono_f] = useState({ campo: '', valido: null });
  const [telefono_C, cambiarTelefono_C] = useState({ campo: '', valido: null });
  const [correo, cambiarCorreo] = useState({ campo: '', valido: null });
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    codigo: /^\d{8}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
    telefono_fi: /^\d{7}$/, // 7 numeros.
    telefono_Ce: /^\d{10}$/ // 14 numeros.
  }

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (usuario.valido === 'true' &&
      codigo.valido === 'true' &&
      fecha.valido === 'true' &&
      direcion.valido === 'true' &&
      telefono_f.valido === 'true' &&
      telefono_C.valido === 'true' &&
      correo.valido === 'true' &&
      terminos
    ) {
      cambiarFormularioValido(true);
      cambiarUsuario({ campo: '', valido: null });
      cambiarCodigo({ campo: '', valido: null });
      cambiarFecha({ campo: '', valido: null });
      cambiarDirecion({ campo: '', valido: null });
      cambiarTelefono_f({ campo: '', valido: null });
      cambiarTelefono_C({ campo: '', valido: null });
      cambiarCorreo({ campo: '', valido: null });
      cambiarTerminos(false)

    } else {
      cambiarFormularioValido(false);
    }

    crearEstudiante({usuario, codigo, fecha, direcion, telefono_f, telefono_C, correo})
  }

  return (
      <main>
        <Formulario action="" onSubmit={onSubmit}>
          <Input
            estado={usuario}
            cambiarEstado={cambiarUsuario}
            tipo="text"
            label="Nombre"
            placeholder="Ingrese su nombre"
            name="usuario"
            leyendaError="Este campo solo puede contener letras y espacios en blanco."
            expresionRegular={expresiones.nombre}
          />
          <Input
            estado={codigo}
            cambiarEstado={cambiarCodigo}
            tipo="codigo"
            label="Código"
            placeholder="Ingrese su código"
            name="codigo"
            leyendaError="Cada código consta de 8 dígitos estrictamente y no debe empezar por ‘0’."
            expresionRegular={expresiones.codigo}
          />
          <Input
            estado={fecha}
            cambiarEstado={cambiarFecha}
            tipo="date"
            label="Fecha"
            placeholder="Ingrese su fecha"
            name="fecha"
            leyendaError="En este campo solo puede agregar numeros."
            expresionRegular={expresiones.usuario}
          />
          <Input
            estado={direcion}
            cambiarEstado={cambiarDirecion}
            tipo="text"
            label="Dirección"
            placeholder="Ingrese su dirección"
            name="direccion"
            leyendaError="En este campo solo puede manejar letras, dígitos y los signos especiales # y –."
            expresionRegular={expresiones.usuario}
          />
          <Input
            estado={telefono_f}
            cambiarEstado={cambiarTelefono_f}
            tipo="text"
            label="Teléfono fijo"
            placeholder="Ingrese su teléfono fijo"
            name="telefono_f"
            leyendaError="En este campo solo se permiten 7 caracteres."
            expresionRegular={expresiones.telefono_fi}
          />
          <Input
            estado={telefono_C}
            cambiarEstado={cambiarTelefono_C}
            tipo="text"
            label="Teléfono celular"
            placeholder="Ingrese su teléfono celular"
            name="telefono_c"
            leyendaError="debe comenzar por 3."
            expresionRegular={expresiones.telefono_Ce}
          />
          <Input
            estado={correo}
            cambiarEstado={cambiarCorreo}
            tipo="text"
            label="Correo Electrónico"
            placeholder="Ingrese su correo electrónico"
            name="correo"
            leyendaError="Coreo incorrecto"
            expresionRegular={expresiones.correo}
          />

          <ContenedorTerminos>
            <Label>
              <input
                type="checkbox"
                name="terminos"
                id="terminos"
                checked={terminos}
                onChange={onChangeTerminos}
              />
              Acepto los terminos y condiciones
            </Label>
          </ContenedorTerminos>
          {formularioValido === false && <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellenar el formulario correctamente.
            </p>
          </MensajeError>}
          <ContenedorBotonCentrado>
            <Boton type="submit">Enviar</Boton>
            {formularioValido === true && <MensajeExito>Formulario enviado !Exitosamente¡</MensajeExito>}
          </ContenedorBotonCentrado>
        </Formulario>
      </main>
  );
}

export default Campos;