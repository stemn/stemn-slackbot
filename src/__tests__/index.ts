import * as request from 'supertest';
import { router } from '../express';

describe('Api Tests', () => {

  test('Version Request', () => {
    request(router)
      .get('/api/version')
      .expect(200);
  });
});
