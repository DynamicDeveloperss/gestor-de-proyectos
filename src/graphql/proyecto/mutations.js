import { gql } from '@apollo/client';

export const CREATE_PROYECTO = gql`
  mutation CrearProyecto(
    $nombre: String!
    $objetivo: String!
    $presupuesto: Float!
    $fechaInicio: Date!
    $fechaFin: Date!
    $lider: String!
  ) {
    crearProyecto(
      nombre: $nombre
      objetivo: $objetivo
      presupuesto: $presupuesto
      fechaInicio: $fechaInicio
      fechaFin: $fechaFin
      lider: $lider
    ) {
      _id
      nombre
      objetivo
      presupuesto
      fechaInicio
      fechaFin
      lider
      estado
      fase
    }
  }
`;
