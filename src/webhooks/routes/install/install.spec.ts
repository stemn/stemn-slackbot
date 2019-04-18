import * as request from 'supertest';

import {
  SLACK_PRIVATE_CHANNEL,
  SLACK_USER_ID,
  SLACK_USER_TOKEN,
  SLACKBOT_ID,
  SLACKBOT_TOKEN,
} from '../../../../test/config';
import { server } from '../../../server';
import { IWebhookInstall } from './IWebhookInstall';

// import * as request from '../../utils';

describe('Webhooks', () => {

  it('Slack App Installed', async () => {

    const requestResponse = [{
      name: 'Project 1',
      id: '12345678',
    }, {
      name: 'Project 2',
      id: '987654321',
    }];

    // const requestMock = jest.spyOn(request, 'request');
    // requestMock.mockReturnValue(requestResponse as any);

    // const postChatMock = jest.spyOn(client, 'postChat');
    // postChatMock.mockImplementation();

    const body = <IWebhookInstall> {
      access_token: SLACK_USER_TOKEN,
      scope: 'identify,bot,commands,incoming-webhook,chat:write:bot',
      user_id: SLACK_USER_ID,
      team_name: '',
      team_id: '',
      incoming_webhook: {
          channel: '',
          channel_id: SLACK_PRIVATE_CHANNEL,
          configuration_url: '',
          url: '',
      },
      bot: {
        bot_user_id: SLACKBOT_ID,
        bot_access_token: SLACKBOT_TOKEN,
      },
    };

    await request(server)
      .post('/api/slack/webhooks/installed')
      .send(body)
      .expect(200);

    // expect(requestMock).toBeCalled();
    // expect(postChatMock).toBeCalled();

    // expect(postChatMock).toBeCalledWith({
    //   channel: body.incoming_webhook.channel_id,
    //   client: expect.any(Object),
    //   message: expect.any(Object),
    // });
  });
});
