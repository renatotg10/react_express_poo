# Orientação a Objetos na Prática com React e Express

Este projeto demonstra a aplicação dos principais conceitos da **Orientação a Objetos (OO)**: **Encapsulamento**, **Herança**, **Polimorfismo** e **Abstração**. Ele é implementado com **React** para o Front-End, **Express** para o Back-End e **Bootstrap** para a estilização.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário no Front-End.
- **Express**: Framework minimalista para Node.js, utilizado no Back-End.
- **Bootstrap**: Framework de CSS para estilização rápida do Front-End.
- **MySQL**: Banco de dados relacional para armazenar e gerenciar dados.
  
## Estrutura do Projeto

O projeto está dividido em duas partes principais:

1. **Back-End**: Implementado com Express. Contém a lógica de negócios e a manipulação do banco de dados.
2. **Front-End**: Implementado com React. Responsável pela interface de usuário e interação com o Back-End.

## Funcionalidades

- **Back-End**:
  - Conexão com o banco de dados MySQL.
  - Implementação de serviços utilizando os princípios de **Encapsulamento**, **Herança**, **Polimorfismo** e **Abstração**.
  - Endpoints para buscar dados de usuários, admins e roles.

- **Front-End**:
  - Interface de usuário que consome a API do back-end.
  - Tabelas dinâmicas para exibição de dados de usuários e admins, estilizadas com Bootstrap.

## Como Rodar o Projeto

### 1. Configuração do Banco de Dados

Crie o banco de dados e a tabela `users` no MySQL utilizando o script abaixo:

```sql
CREATE DATABASE oop_demo;
USE oop_demo;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    role VARCHAR(20) NOT NULL
);
```

### 2. Configuração do Back-End

1. Navegue até a pasta `backend`:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor:

   ```bash
   npm start
   ```

   O servidor estará rodando em `http://localhost:5000`.

### 3. Configuração do Front-End

1. Navegue até a pasta `frontend`:

   ```bash
   cd frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

   O front-end estará acessível em `http://localhost:3000`.

## Endpoints da API

### **GET /users**

Retorna todos os usuários cadastrados.

**Exemplo de resposta**:

```json
[
    {
        "id": 1,
        "name": "John Doe",
        "role": "admin"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "role": "user"
    }
]
```

### **GET /user/:id**

Retorna o usuário pelo ID.

**Exemplo de uso**:

```bash
GET http://localhost:5000/user/1
```

**Exemplo de resposta**:

```json
{
    "id": 1,
    "name": "John Doe",
    "role": "admin"
}
```

### **GET /admins**

Retorna apenas os usuários com a role `admin`.

**Exemplo de uso**:

```bash
GET http://localhost:5000/admins
```

**Exemplo de resposta**:

```json
[
    {
        "id": 1,
        "name": "John Doe",
        "role": "admin"
    }
]
```

### **GET /admin/:id**

Retorna um usuário admin pelo ID.

**Exemplo de uso**:

```bash
GET http://localhost:5000/admin/1
```

**Exemplo de resposta**:

```json
{
    "id": 1,
    "name": "John Doe",
    "role": "admin"
}
```

### **GET /role/:role**

Retorna os usuários com a role especificada.

**Exemplo de uso**:

```bash
GET http://localhost:5000/role/admin
```

**Exemplo de resposta**:

```json
[
    {
        "id": 1,
        "name": "John Doe",
        "role": "admin"
    }
]
```

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou correções, fique à vontade para abrir uma **issue** ou submeter um **pull request**.

## Licença

Este projeto está licenciado sob a **MIT License** - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.