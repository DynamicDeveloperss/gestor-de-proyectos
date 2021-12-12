import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const Login = () => {
  return (
    <div>
      <form className="auth-form">
        <h1>Bienvenid@!</h1>
        <h2>Inicia sesión!</h2>
        <div className="input-form">
          <i className="fas fa-envelope"></i>
          <input type="text" placeholder="Correo" name="correo" required />
        </div>
        <div className="input-form">
          <i className="fas fa-key"></i>
          <input type="password" placeholder="Contraseña" name="password" required />
        </div>
        <button className="button">Iniciar Sesión</button>
        <span>¿No tienes cuenta?</span>
        <Link to="registro" className="link">
          Registrate!
        </Link>
      </form>
    </div>
  );
};

export default Login;
