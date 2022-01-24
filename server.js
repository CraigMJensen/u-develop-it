const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to DB
const db = mysql.createConnection(
  {
    host: 'localhost',
    // mysql username
    user: 'CraigJensen',
    // mysql password
    password: 'G1H2F3n0jj5',
    database: 'election',
  },
  console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  // console.log(rows);
});

// GET single candidate by ID
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// Delete candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Create candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Default 404 response for bad requests
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
