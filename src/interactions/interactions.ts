import { createMessageAdapter } from '@slack/interactive-messages';

import { STEMN_SLACK_SIGNING_SECRET } from '../config/slack';
import {
  attachFolder,
  attachProject,
} from './attach';

const interactions = createMessageAdapter(STEMN_SLACK_SIGNING_SECRET);

// handles the project selection workflow
interactions.action('attach_project', attachProject);
interactions.action('attach_folder', attachFolder);

export const interactionsMiddleware = interactions.expressMiddleware();
