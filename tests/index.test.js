const request = require('supertest');
const { app, server } = require('../src/index');

describe('GET /', () => {
  it('Debe responder con un mensaje de Hola, mundo!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('¡Hola, mundo!');
  });

  afterAll(() => {
    server.close();
  });
});
