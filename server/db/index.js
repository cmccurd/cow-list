const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cam',
  database: 'COWLIST'
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;