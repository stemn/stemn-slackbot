import * as request from 'supertest';
import { server } from '../../../server';

import { install } from './install';
import { IWebhookInstall } from './IWebhookInstall';

import * as client from '../../../client';
// import * as request from '../../utils';

import {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_PRIVATE_CHANNEL,
  SLACK_USER_ID,
  SLACK_USER_TOKEN,
} from '../../../../test/config';

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
      stemn_user_id: '',
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
        bot_user_id: SLACK_BOT_ID,
        bot_access_token: SLACK_BOT_TOKEN,
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
