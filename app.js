// app.js
const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Simpan user ke database, contoh sederhana:
  res.json({ message: `User ${name} with email ${email} created.` });
});

module.exports = app;
