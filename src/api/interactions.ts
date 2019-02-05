import { createMessageAdapter } from '@slack/interactive-messages';

import { STEMN_SLACK_SIGNING_SECRET } from '../config';
import { toggleAllNotifications } from '../kernel/toggleNotifications';

const interactions = createMessageAdapter(STEMN_SLACK_SIGNING_SECRET);

// callback ids are defined in the slack app configuration
interactions.action('toggle_notifications', () => toggleAllNotifications);
interactions.action('upload_file', () => {
  console.log('here');
});

export const interactionsMiddleware = interactions.expressMiddleware();
