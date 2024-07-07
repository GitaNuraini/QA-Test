const express = require('express');
const router = express.Router();

// Data books sementara
let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' }
];

// GET /api/books
router.get('/', (req, res) => {
    res.json(books);
});

// POST /api/books
router.post('/', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

module.exports = router;
