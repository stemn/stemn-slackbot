import { request } from './utils';

describe('Api Tests', () => {

  it('Version Request', async () => {
    const { statusCode } = await request({ endpoint: '/api/version' });

    expect(statusCode).toEqual(200);
  });

  it('Slack App Installed', async () => {

    const body = {
      ok: true,
      access_token: 'xoxp-XXXXXXXX-XXXXXXXX-XXXXX',
      scope: 'identify,bot,commands,incoming-webhook,chat:write:bot',
      user_id: 'XXXXXXXX',
      team_name: 'Your Team Name',
      team_id: 'XXXXXXXX',
      incoming_webhook: {
          channel: '#channel-it-will-post-to',
          channel_id: 'C05002EAE',
          configuration_url: 'https://teamname.slack.com/services/BXXXXX',
          url: 'https://hooks.slack.com/TXXXXX/BXXXXX/XXXXXXXXXX',
      },
    };

    const { statusCode } = await request({
      endpoint: '/api/slack/webhooks/installed',
      method: 'POST',
      body,
    });

    expect(statusCode).toEqual(200);
  });
});
