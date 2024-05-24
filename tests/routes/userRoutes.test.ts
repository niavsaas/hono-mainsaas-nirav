import { app } from '../../src/app';

describe('User Routes', () => {
  it('should get all users', async () => {
    const response = await app.request('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ success: true, data: [] });
  });

  it('should create a new user', async () => {
    const newUser:any = { name: 'John Doe', email: 'john@example.com' };
    const response = await app.request('/users', {
        method: 'POST',
        body:newUser
      })
      
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({ success: true, data: newUser });
  });
});
