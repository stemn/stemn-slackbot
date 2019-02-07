import { ISlackClientChatMessage, SUCCESSFUL_FOLDER_SETUP } from '../../../client';
import { IInteractionsPayload } from '../../IInteractionsPayload';

export const ATTACH_FOLDER_CALLBACK_ID = 'attach_folder';

export async function attachFolder (payload: IInteractionsPayload): Promise<ISlackClientChatMessage> {

  // only one folder to select
  const folder = payload.actions[0]; // lodash _.head seems to lose type

  // TODO: store the folders to sync -> api

  return SUCCESSFUL_FOLDER_SETUP({
    project: 'asdc',
    folder: folder.name || '',
    channel: payload.channel.name,
  });
}
