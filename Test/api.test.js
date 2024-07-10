const { expect } = require('chai');
const request = require('supertest');
const app = require('../server'); // Sesuaikan dengan path ke berkas server Anda

describe('Testing API endpoints', () => {
  // Pengujian untuk endpoint GET /api/books
  it('should fetch all books', (done) => {
    request(app)
      .get('/api/books')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        // Melakukan asersi terhadap respons
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.lengthOf(2); // Karena ada dua buku dalam contoh server
        done();
      });
  });

  // Pengujian untuk endpoint POST /api/books
  it('should create a new book', (done) => {
    const newBook = {
      title: 'New Book',
      author: 'New Author'
    };

    request(app)
      .post('/api/books')
      .send(newBook)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        // Melakukan asersi terhadap respons
        expect(res.body).to.include(newBook); // Memastikan buku baru telah ditambahkan
        done();
      });
  });
});
