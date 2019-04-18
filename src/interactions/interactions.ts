import { createMessageAdapter } from '@slack/interactive-messages';

import { STEMN_SLACK_SIGNING_SECRET } from '../config/slack';
import { handler } from './handler';
import {
  completedSetup,
  SETUP_CALLBACK_ID,
  SETUP_COMPLETED_CALLBACK_ID,
  startSetup,
} from './setup';

const interactions = createMessageAdapter(STEMN_SLACK_SIGNING_SECRET);

// handles the project selection workflow
interactions.action(SETUP_COMPLETED_CALLBACK_ID, handler(completedSetup));
interactions.action(SETUP_CALLBACK_ID, handler(startSetup));

export const interactionsMiddleware = interactions.expressMiddleware();
