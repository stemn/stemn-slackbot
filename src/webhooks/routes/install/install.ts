import { WebClient } from '@slack/client';
import { Request, Response } from 'express';
import * as _ from 'lodash';

import { postChat, WELCOME_MESSAGE } from '../../../client';
import { SETUP_CALLBACK_ID } from '../../../interactions/setup';
import { IWebhookInstall } from './IWebhookInstall';

export async function install (req: Request, res: Response): Promise<void> {

  // respond to webhook
  res.json();

  const webhook = <any> req.body as IWebhookInstall;

  // auth the client as the bot
  const client = new WebClient(webhook.bot.bot_access_token);

  try {
    // welcome the user ask the user what project they want to upload too
    const message = WELCOME_MESSAGE({
      callbackId: SETUP_CALLBACK_ID,
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
