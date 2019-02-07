import { install } from './install';
import { IWebhookInstall } from './IWebhookInstall';

import {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_PRIVATE_CHANNEL,
  SLACK_USER_TOKEN,
} from '../../../test/config';

describe('Core - Welcome User', () => {

  it('', async () => {

    const webhook = <IWebhookInstall> {
      ok: true,
      access_token: SLACK_USER_TOKEN,
      scope: 'identify,bot,commands,incoming-webhook,chat:write:bot',
      user_id: '',
      team_name: '',
      team_id: '',
      incoming_webhook: {
          channel: '',
          channel_id: SLACK_PRIVATE_CHANNEL,
          configuration_url: '',
          url: '',
      },
      bot: {
        bot_user_id: SLACK_BOT_ID,
        bot_access_token: SLACK_BOT_TOKEN,
      },
    };

    install({
      webhook,
    });

    // check that the welcome message was sent

    // check that the mock api has the keys etc
  });
});
