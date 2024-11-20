const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'oop_demo',
});

// Função encapsulada para interagir com o banco
class UserService {
    static fetchAll(callback) {
        const query = 'SELECT * FROM users';
        db.query(query, (err, results) => {
            if (err) callback(err, null);
            else callback(null, results);
        });
    }

    // Método para buscar usuário por ID
    static fetchById(id, callback) {
        const query = 'SELECT * FROM users WHERE id = ?';
        db.query(query, [id], (err, results) => {
            if (err) callback(err, null);
            else callback(null, results[0]);
        });
    }
}

class AdminService extends UserService {
    static fetchAdmins(callback) {
        const query = "SELECT * FROM users WHERE role = 'admin'";
        db.query(query, (err, results) => {
            if (err) callback(err, null);
            else callback(null, results);
        });
    }
}

class RoleService {
    static fetchByRole(role, callback) {
        const query = 'SELECT * FROM users WHERE role = ?';
        db.query(query, [role], (err, results) => {
            if (err) callback(err, null);
            else callback(null, results);
        });
    }
}

app.get('/role/:role', (req, res) => {
    RoleService.fetchByRole(req.params.role, (err, users) => {
        if (err) return res.status(500).send(err);
        res.json(users);
    });
});

app.get('/users', (req, res) => {
    UserService.fetchAll((err, users) => {
        if (err) return res.status(500).send(err);
        res.json(users);
    });
});

// Rota para buscar usuário por ID
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;  // Extrai o ID da URL

    UserService.fetchById(userId, (err, user) => {
        if (err) return res.status(500).send(err);  // Se ocorrer erro na consulta
        if (!user) return res.status(404).send('Usuário não encontrado');  // Caso o usuário não seja encontrado
        res.json(user);  // Retorna o usuário encontrado
    });
});

app.get('/admins', (req, res) => {
    AdminService.fetchAdmins((err, admins) => {
        if (err) return res.status(500).send(err);
        res.json(admins);
    });
});

// Rota para buscar usuário por ID
app.get('/admin/:id', (req, res) => {
    const userId = req.params.id;  // Extrai o ID da URL

    AdminService.fetchById(userId, (err, user) => {
        if (err) return res.status(500).send(err);  // Se ocorrer erro na consulta
        if (!user) return res.status(404).send('Usuário não encontrado');  // Caso o usuário não seja encontrado
        res.json(user);  // Retorna o usuário encontrado
    });
});

app.listen(5000, () => console.log('Servidor em execução na porta 5000'));
