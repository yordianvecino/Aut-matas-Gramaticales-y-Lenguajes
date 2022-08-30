import React from 'react'
import { Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado , Boton, MensajeExito, MensajeError } from './Elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Componentes/Input';

const App = () => {
  return (
    <main>
      <Formulario action="">
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        


        <ContenedorTerminos>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" />
            Acepto los terminos y condiciones
          </Label>
        </ContenedorTerminos>
        {false && <MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error:</b> Por favor rellenar el formulario correctamente.
          </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          <MensajeExito>Formulario enviado !Exitosamente¡</MensajeExito>
        </ContenedorBotonCentrado>
      </Formulario>
    </main>
  );
}

export default App;