import { CHOOSE_FOLDER } from '../../client';
import { IInteractionsPayload } from '../IInteractionsPayload';

export async function attachFolder (payload: IInteractionsPayload, respond: any): Promise<any> {

  // get folders with slack user id

  const folders = [{
    name: '1',
    id: '1',
  }];

  const message = CHOOSE_FOLDER({
    folders,
    callbackId: '',
  });

  respond(message);

  // Before the work completes, return a message object that is the same as the original but with
  // the interactive elements removed.
  const reply = payload.original_message;
  delete reply.attachments[0].actions;
  return reply;
}
