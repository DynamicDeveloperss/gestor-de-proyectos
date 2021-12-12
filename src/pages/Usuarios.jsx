import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import toast, { Toaster } from 'react-hot-toast';
import { GET_USUARIOS } from '../graphql/usuario/queries';
import { Link } from 'react-router-dom';

const Usuarios = () => {
  const { loading, error, data } = useQuery(GET_USUARIOS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    toast.error('Error cargando usuarios');
  }
  return (
    <>
      <h3>Lista de Usuarios</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Cédula</TableCell>
              <TableCell align="right">Correo</TableCell>
              <TableCell align="right">Rol</TableCell>
              <TableCell align="right">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.obtenerUsuarios.map((usuario) => (
              <TableRow
                key={usuario._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {usuario.nombre}
                </TableCell>
                <TableCell align="right">{usuario.cedula}</TableCell>
                <TableCell align="right">{usuario.correo}</TableCell>
                <TableCell align="right">{usuario.rol}</TableCell>
                <TableCell align="right">{usuario.estado}</TableCell>
                <TableCell align="right">
                  <Link to={`${usuario._id}`} className="link">
                    Editar
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Toaster />
    </>
  );
};

export default Usuarios;
