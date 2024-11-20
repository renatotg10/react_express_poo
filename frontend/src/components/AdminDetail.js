import React, { useState } from 'react';

const AdminDetail = ({ users }) => {
  const [userId, setUserId] = useState('');  // Armazenar o ID do usuário que será buscado
  const [user, setUser] = useState(null);    // Armazenar os dados do usuário encontrado
  const [error, setError] = useState('');    // Armazenar mensagens de erro

  // Função para buscar o usuário por ID
  const fetchUserById = () => {
    fetch(`http://localhost:5000/admin/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);  // Definir o usuário encontrado
        setError('');    // Limpar o erro se encontrado
      })
      .catch(err => {
        setError('Administrador não encontrado ou erro na requisição');
        setUser(null);   // Limpar dados do usuário
      });
  };

  return (
    <div className="container mt-4">
      <h2>Buscar Administrador</h2>
      
      {/* Campo de busca para o ID do usuário */}
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Digite o ID do administrador"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}  // Atualiza o estado do ID
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={fetchUserById}>
        Buscar Usuário
      </button>

      {/* Mensagem de erro, caso o usuário não seja encontrado */}
      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {/* Exibe os detalhes do usuário se encontrado */}
      {user && (
        <div className="mt-3">
          <h3>Detalhes do Administrador</h3>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      )}
    </div>
  );
};

export default AdminDetail;
