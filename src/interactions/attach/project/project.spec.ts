import { attachProject } from './project';

describe('interactions - attach - project', () => {

  it('should build message', async () => {

    const payload = {
      channel: {
        name: 'test-channel-id',
      },
      actions: [{
        name: '',
      }],
    } as any;

    const { text } = await attachProject(payload);

    expect(text).toBeDefined();

  });
});
