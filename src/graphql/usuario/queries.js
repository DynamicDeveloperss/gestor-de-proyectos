import { gql } from '@apollo/client';

export const GET_USUARIOS = gql`
  query ObtenerUsuarios {
    obtenerUsuarios {
      _id
      nombre
      cedula
      correo
      rol
      estado
    }
  }
`;

export const GET_USUARIO = gql`
  query ObtenerUsuario($id: ID!) {
    obtenerUsuario(_id: $id) {
      nombre
      correo
      cedula
      rol
      estado
    }
  }
`;
