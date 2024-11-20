import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Importando Routes em vez de Switch
import UserList from './components/UserList';
import AdminList from './components/AdminList';
import RoleList from './components/RoleList';
import UserDetail from './components/UserDetail';
import AdminDetail from './components/AdminDetail';

const App = () => {
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Buscar todos os usuários e administradores ao carregar o componente
    fetchUsers();
    fetchAdmins();
  }, []);

  // Função para buscar todos os usuários
  const fetchUsers = () => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  // Função para buscar todos os administradores
  const fetchAdmins = () => {
    fetch('http://localhost:5000/admins')
      .then(res => res.json())
      .then(data => setAdmins(data));
  };

  return (
    <Router>
      <div className="App">
        <h1>Gerenciamento de Usuários</h1>
        
        {/* Links de navegação */}
        <nav>
          <ul>
            <li>
              <Link to="/users">Usuários</Link>
            </li>
            <li>
              <Link to="/admins">Administradores</Link>
            </li>
            <li>
              <Link to="/role">Filtar por Papel</Link>
            </li>
            <li>
              <Link to="/user">Detalhes do Usuário</Link>  {/* Exemplo de link para um usuário específico */}
            </li>
            <li>
              <Link to="/admin">Detalhes do Administrador</Link>  {/* Exemplo de link para um usuário específico */}
            </li>
          </ul>
        </nav>

        {/* Definição das rotas */}
        <Routes>
          <Route path="/users" element={<UserList users={users} />} />
          <Route path="/admins" element={<AdminList admins={admins} />} />
          <Route path="/role" element={<RoleList role="Manager" />} />
          <Route path="/user" element={<UserDetail users={users} />} />
          <Route path="/Admin" element={<AdminDetail admins={admins} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
