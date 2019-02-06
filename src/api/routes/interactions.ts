import { createMessageAdapter } from '@slack/interactive-messages';

import { STEMN_SLACK_SIGNING_SECRET } from '../../config/slack';
import { attachFolder } from '../../core/attachFolder';
import { attachProject } from '../../core/attachProject';
// import { toggleAllNotifications } from '../../core/toggleNotifications';

const interactions = createMessageAdapter(STEMN_SLACK_SIGNING_SECRET);

// interactions.action('toggle_notifications', toggleAllNotifications);

// handles the project selection workflow
interactions.action('attach_project', attachProject);
interactions.action('attach_folder', attachFolder);

export const interactionsMiddleware = interactions.expressMiddleware();
