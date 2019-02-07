import { CHOOSE_FOLDER, ISlackClientChatMessage } from '../../client';
import { IInteractionsPayload } from '../IInteractionsPayload';

export const ATTACH_PROJECT_CALLBACK_ID = 'attach_project';

export async function attachProject (payload: IInteractionsPayload): Promise<ISlackClientChatMessage> {

  // set the users slack project to the payloads
  // const project = payload.
  console.log({ payload });

  const folders = [{
    name: 'Folder 1',
    id: '12345678',
  }, {
    name: 'Folder 2',
    id: '987654321',
  }];

  return CHOOSE_FOLDER({
    folders,
    callbackId: 'attach_folder',
  });
}
