import React, { useState, useEffect } from 'react';

const RoleList = ({ role }) => {
    const [users, setUsers] = useState([]);  // Estado para armazenar os usuários

    useEffect(() => {
        // Realiza uma requisição para a API filtrando pelo papel (role)
        fetch(`http://localhost:5000/role/${role}`)
            .then(res => res.json())
            .then(data => setUsers(data)); // Atualiza o estado com os usuários
    }, [role]); // Dependência de 'role', a requisição será feita sempre que o 'role' mudar

    return (
        <div className="container mt-4">
            <h2>{role.charAt(0).toUpperCase() + role.slice(1)}s</h2>  {/* Título baseado no papel */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>  {/* Renderiza uma linha para cada usuário */}
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoleList;
