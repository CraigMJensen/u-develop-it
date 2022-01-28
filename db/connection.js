const mysql = require('mysql2');

// Connect to DB
const db = mysql.createConnection({
  host: 'localhost',
  // mysql username
  user: 'CraigJensen',
  // mysql password
  password: '',
  database: 'election',
});

module.exports = db;
