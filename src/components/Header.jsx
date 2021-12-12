import React from 'react';
import '../styles/privateLayout.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>NombreApp</h1>
      <ul className="nav-menu">
        <li>
          <i className="fas fa-home">
            <Link to={'/main'} className="nav-link">
              Home
            </Link>
          </i>
        </li>
        <li>
          <Link to={'/'} className="nav-link">
            Proyectos
          </Link>
        </li>
        <li>
          <Link to={'/'} className="nav-link">
            Mis Incripciones
          </Link>
        </li>
        <li>
          <Link to={'usuarios'} className="nav-link">
            Usuarios
          </Link>
        </li>
      </ul>
      <ul className="nav-menu">
        <li>Nombre Usuario</li>
        <li>
          <button className="logout-button">
            Cerrar Sesión <i class="fas fa-sign-out-alt"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
