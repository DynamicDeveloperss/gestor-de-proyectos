import { gql } from '@apollo/client';

export const CREATE_USUARIO = gql`
  mutation CrearUsuario(
    $nombre: String!
    $correo: String!
    $cedula: String!
    $rol: String!
    $password: String!
  ) {
    crearUsuario(
      nombre: $nombre
      correo: $correo
      cedula: $cedula
      rol: $rol
      password: $password
    ) {
      _id
      nombre
      cedula
      rol
      correo
      estado
    }
  }
`;

export const UPDATE_USUARIO = gql`
  mutation EditarUsuario(
    $editarUsuarioId: ID!
    $nombre: String!
    $correo: String!
    $cedula: String!
    $rol: String!
    $estado: String!
  ) {
    editarUsuario(
      id: $editarUsuarioId
      nombre: $nombre
      correo: $correo
      cedula: $cedula
      rol: $rol
      estado: $estado
    ) {
      nombre
      correo
      cedula
      rol
      estado
    }
  }
`;
