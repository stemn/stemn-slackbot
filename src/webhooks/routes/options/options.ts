import { WebClient } from '@slack/client';
import { Request, Response } from 'express';
import * as _ from 'lodash';

import { postChat, WELCOME_MESSAGE } from '../../../client';
import { SETUP_CALLBACK_ID } from '../../../interactions/setup';
import { IWebhookOptions } from './IWebhookOptions';

export async function options (req: Request, res: Response): Promise<void> {

  const data = req.body as IWebhookOptions;

  console.log(data.value);

  console.log({ data });

   // respond to webhook
  res.json({
    options: [
      {
        label: '[UXD-342] The button color should be artichoke green, not jalapeño',
        value: 'UXD-342',
      },
    ],
  });
}
