import { attachFolder } from './folder';

describe('interactions - attach - folder', () => {

  it('should build message', async () => {

    const payload = {
      channel: {
        name: 'test-channel-id',
      },
      actions: [{
        name: '',
      }],
    } as any;

    const { text } = await attachFolder(payload);

    expect(text).toBeDefined();
  });
});
