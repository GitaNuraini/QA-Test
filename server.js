const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Contoh data books
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' }
];

// Endpoint untuk mendapatkan semua buku
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Endpoint untuk menambahkan buku baru
app.post('/api/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

module.exports = app; // Export aplikasi Express untuk pengujian
