import * as request from 'supertest';
import { server } from './server';

describe('Server Tests', () => {

  it('Version Request', async () => {
    await request(server).get('/api/version').expect(200);
  });

  it('404', async () => {
    await request(server).post('/api/version').expect(404);
    await request(server).get('/').expect(404);
  });
});
