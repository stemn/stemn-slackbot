import { request } from './utils';

describe('Api Tests', () => {

  it('Version Request', async () => {
    const { status } = await request({ endpoint: '/api/version' });

    expect(status).toEqual(200);
  });
});
