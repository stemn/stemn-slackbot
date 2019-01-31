import { createEventAdapter } from '@slack/events-api';

import { SLACK_SIGNING_SECRET } from '../config';
import { uploadFileToStemn } from '../kernel/uploadFileToStemn';
import { IEventFile } from '../types';

export const events = createEventAdapter(SLACK_SIGNING_SECRET);

events.on('error', console.error);
events.on('file_created', async (file: IEventFile) => uploadFileToStemn({ file }));
events.on('file_shared', async (file: IEventFile) => {
  // uploadFileToStemn(file)
});
