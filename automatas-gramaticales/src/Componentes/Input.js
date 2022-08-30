import React from 'react';
import {Input, Label, GrupoInput, LeyendaError, IconValidacion} from './../Elementos/Formularios';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ComponenteInput = () => {
    return ( 
        <div>
          <Label htmlFor="nombre">Nombre del estudiante</Label>
          <GrupoInput>
            <Input type="text" placeholder="Nombre del Estudiante" id="nombre" />
            <IconValidacion icon={faCheckCircle} />
          </GrupoInput>
          <LeyendaError>Lorem ipsum dolor ssit amet.</LeyendaError>
        </div>
     );
}
 
export default ComponenteInput;