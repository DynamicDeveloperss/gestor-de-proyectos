import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Registro from './pages/Registro';
import PrivateLayout from './layouts/PrivateLayout';
import Usuarios from './pages/Usuarios';
import EditarUsuario from './pages/EditarUsuario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<AuthLayout />}>
          <Route path="" element={<Login />} />
          <Route path="registro" element={<Registro />} />
        </Route>
        <Route path="main" element={<PrivateLayout />}>
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="usuarios/:id" element={<EditarUsuario />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
