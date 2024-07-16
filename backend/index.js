const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); // Import CORS middleware

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL configuration
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: 3306 // MySQL port, usually 3306
});

// Route to handle adding a joke to favorites
app.post('/', async (req, res) => {
  const { id, joke } = req.body;
  try {
    const connection = await pool.promise().getConnection();
    const [rows, fields] = await connection.execute(
      'INSERT INTO jokes (joke_id, joke_text) VALUES (?, ?)',
      [id, joke]
    );
    connection.release();
    res.json({ id: rows.insertId, joke_id: id, joke_text: joke });
  } catch (err) {
    console.error('Error executing query', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
