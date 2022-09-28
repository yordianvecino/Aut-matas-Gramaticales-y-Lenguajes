import React, { Fragment, useState, useEffect } from 'react'
import Campos from './Vistas/Campos';
// import Estudiante from './Componentes/Estudiante';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import Fab from '@mui/material/Fab';
import GetAppIcon from '@mui/icons-material/GetApp';
import { saveAs } from 'file-saver';

function App() {

  let estudianteIniciales = JSON.parse(localStorage.getItem('estudiante'));
  if (!estudianteIniciales) {
    estudianteIniciales = [];
  }

  const [estudiantes, guardarEstudiante] = useState(estudianteIniciales);

  useEffect(() => {
    if (estudianteIniciales) {
      localStorage.setItem('estudiante', JSON.stringify(estudiantes))
    } else {
      localStorage.setItem('estudiante', JSON.stringify([]));
    }
  });

  // , [estudiantes]

  const crearEstudiante = estudiante => {
    guardarEstudiante([
      ...estudiantes,
      estudiante
    ])
  }

  const titulo = estudiantes.length === 0 ? '' : 'Administrar Estudiantes';

  //Funcion para Eliminar
  const eliminarEstudiante = codigo => {
    const nuevoEstudiante = estudiantes.filter(estudiantes => estudiantes.codigo !== codigo);
    guardarEstudiante(nuevoEstudiante)
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function downloadJSON(data) {
    var blob = new Blob([JSON.stringify(estudiantes)], { type: "" });
    saveAs(blob, "Automatas-Gramaticales.json");
  }

  const downloadTXT = (data) => {
    const blob = new Blob([JSON.stringify(estudiantes)], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'Automatas-Gramaticale.txt');
  }

  const downloadXML = (data) => {
    const blob = new Blob([JSON.stringify(estudiantes)], { type: 'data:text/xml;charset=utf-8' });
    saveAs(blob, 'Automatas-Gramaticale.xml');
  }

  
  const downloadEXCEL = (data) => {
    const blob = new Blob([estudiantes], { type: 'application/vnd.ms-excel;charset=utf-8' });
    saveAs(blob, 'Automatas-Gramaticale.xlsx');
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
            <main>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Usuario</StyledTableCell>
                      <StyledTableCell align="center">Codigo</StyledTableCell>
                      <StyledTableCell align="center">Fecha</StyledTableCell>
                      <StyledTableCell align="center">Direccion</StyledTableCell>
                      <StyledTableCell align="center">Telefono Fijo</StyledTableCell>
                      <StyledTableCell align="center">Telefono Celular</StyledTableCell>
                      <StyledTableCell align="center">Correo</StyledTableCell>
                      <StyledTableCell align="center">Acciones</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {estudiantes.map((estudiante) => (
                      <StyledTableRow key={estudiante.codigo.campo}>
                        <StyledTableCell component="th" scope="row">{estudiante.usuario.campo}</StyledTableCell>
                        <StyledTableCell align="center">{estudiante.codigo.campo}</StyledTableCell>
                        <StyledTableCell align="center">{estudiante.fecha.campo}</StyledTableCell>
                        <StyledTableCell align="center">{estudiante.direcion.campo}</StyledTableCell>
                        <StyledTableCell align="center">{estudiante.telefono_f.campo}</StyledTableCell>
                        <StyledTableCell align="center">{estudiante.telefono_C.campo}</StyledTableCell>
                        <StyledTableCell align="center">{estudiante.correo.campo}</StyledTableCell>
                        <StyledTableCell align="center">
                          <IconButton aria-label="delete" onClick={() => eliminarEstudiante(estudiante.codigo)}>
                            <DeleteIcon />
                          </IconButton>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
                <BottomNavigation sx={{ width: 1120 }} value={value} onChange={handleChange}>
                  <Fab variant="extended" sx={{ mr: 2 }} onClick={downloadTXT}>
                    <GetAppIcon sx={{ mr: 1 }} />
                    Exportar Texto
                  </Fab>
                  <Fab variant="extended" sx={{ mr: 2 }} onClick={downloadEXCEL}>
                    <GetAppIcon sx={{ mr: 1 }} />
                    Exportar Excel
                  </Fab>
                  <Fab variant="extended" sx={{ mr: 2 }} onClick={downloadXML}>
                    <GetAppIcon sx={{ mr: 1 }} />
                    Exportar XML
                  </Fab>
                  <Fab variant="extended" onClick={downloadJSON}>
                    <GetAppIcon sx={{ mr: 1 }} />
                    Exportar JSON
                  </Fab>
                </BottomNavigation>
              </TableContainer>

            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;