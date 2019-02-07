import { createMessageAdapter } from '@slack/interactive-messages';

import { STEMN_SLACK_SIGNING_SECRET } from '../config/slack';
import {
  ATTACH_FOLDER_CALLBACK_ID,
  ATTACH_PROJECT_CALLBACK_ID,
  attachFolder,
  attachProject,
} from './attach';

const interactions = createMessageAdapter(STEMN_SLACK_SIGNING_SECRET);

// handles the project selection workflow
interactions.action(ATTACH_PROJECT_CALLBACK_ID, (payload: any, respond: any) => handleRespond(payload, respond, attachProject));
interactions.action(ATTACH_FOLDER_CALLBACK_ID, (payload: any, respond: any) => handleRespond(payload, respond, attachFolder));

async function handleRespond (payload: any, respond: any, fn: any) {

  const message = await fn(payload);

  respond(message);

  // Before the work completes, return a message object that is the same as the original but with
  // the interactive elements removed.
  const reply = payload.original_message;
  delete reply.attachments[0].actions;
  return reply;
}

export const interactionsMiddleware = interactions.expressMiddleware();
