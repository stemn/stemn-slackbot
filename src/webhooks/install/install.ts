import { WebClient } from '@slack/client';

import { postChat, WELCOME_MESSAGE } from '../../client';
import { ATTACH_PROJECT_CALLBACK_ID } from '../../interactions/attach';
import { request } from '../../utils';
import { IWebhookInstall } from './IWebhookInstall';

interface MethodArguments {
  webhook: IWebhookInstall;
}

export async function install ({
  webhook,
}: MethodArguments): Promise<any> {

  // auth the client as the bot
  const client = new WebClient(webhook.bot.bot_access_token);

  try {

     // store the following in the db
    /**
     * user token
     * user id
     * bot token
     * bot id
     */

    // get the users projects from stemn -> Api call
    const projects = await request({
      endpoint: '/api/v1/projects',
      method: 'GET',
      qs: {
        botId: webhook.bot.bot_user_id,
        userId: webhook.user_id,
      },
    }) as any;

    // welcome the user ask the user what project they want to upload too
    const message = WELCOME_MESSAGE({
      projects,
      callbackId: ATTACH_PROJECT_CALLBACK_ID,
    });

    await postChat({
      client,
      channel: webhook.incoming_webhook.channel_id,
      message,
    });

  } catch (e) {
    console.error(e);
  }
}
