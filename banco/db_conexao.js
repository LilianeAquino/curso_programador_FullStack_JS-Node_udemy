const mysql = require('mysql');
const conexao = mysql.createPool({
    host: 'localhost',
    user: 'thanos',
    password: 'thanos',
    database: 'db_portifolio'
});

module.exports = conexao;