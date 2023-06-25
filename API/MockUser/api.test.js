const request = require('supertest');
const { expect } = require('chai');

describe('API Routes', () => {
  let authToken;

  // Test the CREATE USER route
  it('should create a new user', async () => {
    const response = await request('http://localhost:3000')
      .post('/api/v1/users')
      .send({ name: 'mar', email: 'mar@gmail.com', password: '123' });

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('message', 'User registered with success');
    expect(response.body).to.have.property('token');
	
  });
  
  
});
