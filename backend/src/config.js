const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'userhub',
});

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych: ', err);
    throw err;
  }
  console.log('Połączono z bazą danych MySQL');
});

module.exports = db;