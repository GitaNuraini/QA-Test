// test.js
const request = require('supertest');
const app = require('./app');

// Tes endpoint GET /api
describe('GET /api', function() {
  it('responds with JSON message', function(done) {
    request(app)
      .get('/api')
      .expect('Content-Type', /json/)
      .expect(200, { message: 'Welcome to the API' })
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// Tes endpoint POST /api/users
describe('POST /api/users', function() {
  it('responds with JSON message after creating a user', function(done) {
    request(app)
      .post('/api/users')
      .send({ name: 'John Doe', email: 'john.doe@example.com' })
      .expect('Content-Type', /json/)
      .expect(200, { message: 'User John Doe with email john.doe@example.com created.' })
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
