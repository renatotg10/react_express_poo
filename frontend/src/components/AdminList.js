import React, { useState, useEffect } from 'react';

const AdminList = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/admins')
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, []);

    return (
        <div className="container mt-4">
            <h2>Admins</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map(admin => (
                        <tr key={admin.id}>
                            <td>{admin.id}</td>
                            <td>{admin.name}</td>
                            <td>{admin.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminList;
