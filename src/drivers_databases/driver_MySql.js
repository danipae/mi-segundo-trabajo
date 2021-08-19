const mysql = require ('mysql');
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root@localhost',
    password: '',
    database: 'administrador_trabajo'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('mysql se conecto');

});
module.exports = mysql;