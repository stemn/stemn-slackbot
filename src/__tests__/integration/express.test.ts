import { request } from '../utils';

describe('Api Tests', () => {

  it('Version Request', async () => {
    const { statusCode } = await request({ endpoint: '/api/version' });

    expect(statusCode).toEqual(200);
  });
});
