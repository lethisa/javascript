// load supertest
const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('SERVER', () => {

  describe('GET /', () => {
    it('should return hello word response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'page not found'
          });
        })
        .end(done);
    });

  });

  describe('GET /user', () => {
    // test get
    it('should return my user object', (done) => {
      request(app)
        .get('/user')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'lethisa',
            age: 27
          });
        })
        .end(done);
    });
  });

});
