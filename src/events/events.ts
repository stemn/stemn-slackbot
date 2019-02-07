import { createEventAdapter } from '@slack/events-api';

import { STEMN_SLACK_SIGNING_SECRET } from '../config/slack';
import { IEventFile } from './IEventFile';
import { uploadToStemn } from './uploadToStemn';

const events = createEventAdapter(STEMN_SLACK_SIGNING_SECRET);

events.on('error', console.error);
events.on('file_shared', async (file: IEventFile) => uploadToStemn({ file }));

export const eventsMiddleware = events.expressMiddleware();
