import React from 'react';
import '../styles/styles.css';

const ProjectCard = ({ nombre, lider, objetivo, fechaInicio, fechaFin, estado, fase }) => {
  return (
    <div className="card">
      <div className="container">
        <h3>
          <b>{nombre} </b>
        </h3>
        <p>Lider: {lider}</p>
        <p>Objetivo: {objetivo}</p>
        <p>Fecha Inicio: {fechaInicio}</p>
        <p>Fecha Fin: {fechaFin}</p>
        <p>Estado: {estado}</p>
        <p>Fase: {fase}</p>
      </div>
      <button>
        Ver Proyecto
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default ProjectCard;
