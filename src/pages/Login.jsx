import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/auth/mutation';
import '../styles/auth.css';

const Login = () => {
  const form = useRef(null);
  const navigateTo = useNavigate();
  const [login, { data: dataMutation }] = useMutation(LOGIN);

  useEffect(() => {
    console.log(dataMutation);
    if (dataMutation) {
      if (dataMutation.login.token) {
        localStorage.setItem('token', JSON.stringify(dataMutation.login.token));
        navigateTo('main');
      }
    }
  }, [dataMutation]);

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const loginInfo = {};
    formData.forEach((item, key) => {
      loginInfo[key] = item;
    });
    login({ variables: loginInfo });
    e.target.reset();
  };

  return (
    <div>
      <form ref={form} onSubmit={loginHandler} className="auth-form">
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
        <button type="submit" className="button">
          Iniciar Sesión
        </button>
        <span>¿No tienes cuenta?</span>
        <Link to="registro" className="link">
          Registrate!
        </Link>
      </form>
    </div>
  );
};

export default Login;
