const request = require('supertest');
const app = require('../app');

describe('Testing API endpoints', () => {
    // Test case untuk GET /api/books
    it('should fetch all books', async () => {
        const response = await request(app).get('/api/books');
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(2); // Sesuaikan dengan jumlah buku yang diharapkan
    });

    // Test case untuk POST /api/books
    it('should create a new book', async () => {
        const newBook = { title: 'New Book', author: 'New Author' };
        const response = await request(app)
            .post('/api/books')
            .send(newBook);
        expect(response.status).toBe(201);
        expect(response.body.title).toBe('New Book');
        expect(response.body.author).toBe('New Author');
    });

    // Tambahan test case untuk endpoint lainnya (PUT, DELETE, dll) sesuai kebutuhan
});
