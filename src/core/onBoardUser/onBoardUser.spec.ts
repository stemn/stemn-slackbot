import { IWebhookInstall } from '../../types';
import { onBoardUser } from './onBoardUser';

import {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_PRIVATE_CHANNEL,
  SLACK_USER_TOKEN,
} from '../../../test/config';

describe('Core - onBoardUser', () => {

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

    onBoardUser({
      webhook,
    });
  });
});
