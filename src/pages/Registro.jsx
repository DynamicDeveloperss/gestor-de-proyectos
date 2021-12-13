import React, { useRef, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { REGISTRO } from '../graphql/auth/mutation';
import '../styles/auth.css';

const Registro = () => {
  const form = useRef(null);

  const [registro, { data }] = useMutation(REGISTRO);

  useEffect(() => {
    console.log('data: ', data);
    if (data) {
      if (data.registro.token) {
        localStorage.setItem('token', data.registro.token);
      }
    }
  }, [data]);

  const crearUsuario = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const nuevoUsuario = {};
    formData.forEach((item, key) => {
      nuevoUsuario[key] = item;
    });
    registro({ variables: nuevoUsuario })
      .then(() => {
        toast.success('Registro Exitoso', { duration: 4000 });
      })
      .catch((error) => {
        console.error(error);
      });
    e.target.reset();
  };

  return (
    <form ref={form} onSubmit={crearUsuario} className="auth-form">
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
        <input type="password" placeholder="Contraseña" name="password" required />
      </div>
      <div className="input-form">
        <i className="fas fa-user-tag"></i>
        <select name="rol" className="dropdown">
          <option value="deafult" defaultValue disabled>
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
      <Toaster position="top-right" />
    </form>
  );
};

export default Registro;
