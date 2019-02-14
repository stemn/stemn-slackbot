import { createEventAdapter } from '@slack/events-api';

import { STEMN_SLACK_SIGNING_SECRET } from '../config/slack';
import { IEventBody } from './IEventBody';
import { IEventFile, uploadToStemn } from './uploadToStemn';

const events = createEventAdapter(STEMN_SLACK_SIGNING_SECRET, {
  includeBody: true,
});

events.on('error', console.error);
events.on('file_shared', async (file: IEventFile, eventBody: IEventBody) => uploadToStemn({ file, eventBody }));

export const eventsMiddleware = events.expressMiddleware();
