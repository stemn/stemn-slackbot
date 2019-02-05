import { IWebhookInstall } from '../../types';
import { request } from '../utils';

import {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_PRIVATE_CHANNEL,
} from '../config';

describe('Webhooks', () => {

  it('Slack App Installed', async () => {

    const body = <IWebhookInstall> {
      ok: true,
      access_token: '',
      scope: 'identify,bot,commands,incoming-webhook,chat:write:bot',
      user_id: '',
      team_name: '',
      team_id: '',
      incoming_webhook: {
          channel: '',
          channel_id: `${SLACK_PRIVATE_CHANNEL}`,
          configuration_url: '',
          url: '',
      },
      bot: {
        bot_user_id: SLACK_BOT_ID,
        bot_access_token: SLACK_BOT_TOKEN,
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
