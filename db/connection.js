const mysql = require('mysql2');

// Connect to DB
const db = mysql.createConnection({
  host: 'localhost',
  // mysql username
  user: 'CraigJensen',
  // mysql password
  password: 'G1H2F3n0jj5',
  database: 'election',
});

module.exports = db;
