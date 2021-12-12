import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/privateLayout.css';

const PrivateLayout = () => {
  return (
    <div id="main-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
