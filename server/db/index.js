const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cam',
  database: 'COWLIST'
});

connection.query('USE COWLIST', (err, results, fields) => {
  console.log(results);
});

module.exports = connection;