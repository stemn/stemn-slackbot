import { createMessageAdapter } from '@slack/interactive-messages';

import { STEMN_SLACK_SIGNING_SECRET } from '../config/slack';
import {
  ATTACH_FOLDER_CALLBACK_ID,
  ATTACH_PROJECT_CALLBACK_ID,
  attachFolder,
  attachProject,
} from './attach';
import { handler } from './handler';

const interactions = createMessageAdapter(STEMN_SLACK_SIGNING_SECRET);

// handles the project selection workflow
interactions.action(ATTACH_PROJECT_CALLBACK_ID, handler(attachProject));
interactions.action(ATTACH_FOLDER_CALLBACK_ID, handler(attachFolder));

export const interactionsMiddleware = interactions.expressMiddleware();
