import { CHOOSE_FOLDER, ISlackClientChatMessage } from '../../client';
import { IInteractionsPayload } from '../IInteractionsPayload';

export const ATTACH_FOLDER_CALLBACK_ID = 'attach_folder';

export async function attachFolder (payload: IInteractionsPayload): Promise<ISlackClientChatMessage> {

  // get folders with slack user id

  const folders = [{
    name: '1',
    id: '1',
  }];

  return CHOOSE_FOLDER({
    folders,
    callbackId: '',
  });
}
