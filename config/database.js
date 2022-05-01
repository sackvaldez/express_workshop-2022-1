const mysql= require('mysql');
const pokemon = require('../routes/pokemon');
const util= require('util');

const pool= mysql.createPool({
    connectionLimit:10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pokemon'
});

pool.query= util.promisify(pool.query);
//EXPORTAR LA CONEXION A LA BASE DE DATOS
module.exports = pool;