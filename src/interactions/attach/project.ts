import { CHOOSE_FOLDER, ISlackClientChatMessage } from '../../client';
import { IInteractionsPayload } from '../IInteractionsPayload';
import { ATTACH_FOLDER_CALLBACK_ID } from './folder';

export const ATTACH_PROJECT_CALLBACK_ID = 'attach_project';

export async function attachProject (payload: IInteractionsPayload): Promise<ISlackClientChatMessage> {

  // only one project to select
  const project = payload.actions[0].value;

  // TODO: store and get the projects folders from stemn -> Api

  const folders = [{
    name: 'Folder 1',
    id: '12345678',
  }, {
    name: 'Folder 2',
    id: '987654321',
  }];

  return CHOOSE_FOLDER({
    folders,
    callbackId: ATTACH_FOLDER_CALLBACK_ID,
  });
}
