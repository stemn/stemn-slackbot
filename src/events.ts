import { createEventAdapter } from '@slack/events-api';
import { Router } from 'express';

import { addFileComment } from './client';
import { SLACK_SIGNING_SECRET } from './config';
import { IFileCreatedEvent } from './types';

const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET);

export const slackRouter = Router();

slackRouter.use('/slack/events', slackEvents.expressMiddleware());

slackEvents.on('file_created', (file: IFileCreatedEvent) => {

  try {
    const response = addFileComment({
        fileId: file.file_id,
        comment: 'File Uploaded to STEMN',
    });
  } catch (error) {
    console.error(error);
  }

});

slackEvents.on('error', console.error);
