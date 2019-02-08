import * as request from 'supertest';

import { server } from '../server';
import { IWebhookInstall } from './install/IWebhookInstall';

jest.mock('./install', () => {
  return {
      install : jest.fn(),
  };
});

describe('/api/slack/webhooks/installed', () => {

  it('should reject', async () => {
    await request(server)
      .post('/api/slack/webhooks/installed')
      .send({
        invalid: 'should error',
      })
      .expect(400);
  });

  it('should pass', async () => {

    const body = <IWebhookInstall> {
      ok: true,
      access_token: '',
      scope: '',
      user_id: '',
      team_name: '',
      team_id: '',
      incoming_webhook: {
          channel: '',
          channel_id: '',
          configuration_url: '',
          url: '',
      },
      bot: {
        bot_user_id: '',
        bot_access_token: '',
      },
    };

    await request(server)
      .post('/api/slack/webhooks/installed')
      .send(body)
      .expect(200);
  });
});
