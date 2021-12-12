import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<AuthLayout />}>
          <Route path="" element={<Login />} />
          <Route path="registro" element={<Registro />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
