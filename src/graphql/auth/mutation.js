import { gql } from '@apollo/client';

export const REGISTRO = gql`
  mutation Registro(
    $nombre: String!
    $cedula: String!
    $rol: String!
    $password: String!
    $correo: String!
  ) {
    registro(nombre: $nombre, cedula: $cedula, rol: $rol, password: $password, correo: $correo) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($correo: String!, $password: String!) {
    login(correo: $correo, password: $password) {
      token
      error
    }
  }
`;
