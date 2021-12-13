import { gql } from '@apollo/client';

export const GET_PROYECTOS = gql`
  query ObtenerProyectos {
    obtenerProyectos {
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
