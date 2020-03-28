const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);

/* ROTA / RECURSO   */

/* 
METODOS HTTP
    GET: Buscar Informação do Back-end
    POST: Criar uma informação no Back-end
    PUT: Alterar uma informação no Back-end
    DELETE: Deletar uma informação no Back-end
*/

/*
TIPOS DE PARAMETROS
    
    Query Params: Parametros nomeados enviados na rota apos o '?' (Filtros, Paginação)
        ex: 'users/?name=Winner'
    
    Route Params: parametros utilizados para identificar recursos -> app.get('users/:id', () => {});
        ex: 'users/1'
    
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos -> app.post('/users', () => {});
        obs: informar ao node que esta usando JSON antes de criar as rotas
        ex: app.use(express.json());
*/

/*
Banco de Dados:
    SQL: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL:  MongoDB, Redis, Cassandra, CouchDB, etc
*/

/*
Modos de interagir com o banco de dados
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
*/
