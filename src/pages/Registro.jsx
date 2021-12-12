import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const Registro = () => {
  return (
    <form className="auth-form">
      <h2>Crea tu cuenta!</h2>
      <div className="input-form">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Nombre" name="nombre" required />
      </div>
      <div className="input-form">
        <i className="fas fa-envelope"></i>
        <input type="text" placeholder="Correo" name="correo" required />
      </div>
      <div className="input-form">
        <i className="fas fa-id-card"></i>
        <input type="text" placeholder="Cédula" name="cedula" required />
      </div>
      <div className="input-form">
        <i className="fas fa-key"></i>
        <input type="text" placeholder="Contraseña" name="password" required />
      </div>
      <div className="input-form">
        <i className="fas fa-user-tag"></i>
        <select name="rol" className="dropdown">
          <option value="deafult" defaultValue>
            Seleccione un rol
          </option>
          <option value="Administrador">Administrador</option>
          <option value="Líder">Líder</option>
          <option value="Estudiante">Estudiante</option>
        </select>
      </div>
      <button type="submit" className="button">
        Registrar
      </button>
      <span>¿Ya tienes una cuenta?</span>
      <Link to="/" className="link">
        Inicia Sesión!
      </Link>
    </form>
  );
};

export default Registro;
