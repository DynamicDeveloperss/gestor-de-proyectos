import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import '../styles/proyectos.css';
import { useQuery } from '@apollo/client';
import { GET_PROYECTOS } from '../graphql/proyecto/queries';

const Proyectos = () => {
  const { data, loading, error } = useQuery(GET_PROYECTOS);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return error;
  }

  return (
    <div id="projects-container">
      {data.obtenerProyectos.map((proyecto) => {
        return (
          <ProjectCard
            nombre={proyecto.nombre}
            lider={proyecto.lider}
            objetivo={proyecto.objetivo}
            fechaInicio={proyecto.fechaInicio}
            fechaFin={proyecto.fechaFin}
            estado={proyecto.estado}
            fase={proyecto.fase}
          />
        );
      })}
    </div>
  );
};

export default Proyectos;
