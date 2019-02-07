import { CHOOSE_FOLDER } from '../../client';
import { IInteractionsPayload } from '../IInteractionsPayload';

export async function attachProject (payload: IInteractionsPayload, respond: any): Promise<any> {

  // get folders with slack user id

  const folders = [{
    name: 'Folder 1',
    id: '12345678',
  }, {
    name: 'Folder 2',
    id: '987654321',
  }];

  const message = CHOOSE_FOLDER({
    folders,
    callbackId: 'attach_folder',
  });

  respond(message);

  // Before the work completes, return a message object that is the same as the original but with
  // the interactive elements removed.
  const reply = payload.original_message;
  delete reply.attachments[0].actions;
  return reply;
}
