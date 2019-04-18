import { WebClient } from '@slack/client';

import { ISlackClientChatMessage, openDialog, SETUP_DIALOG } from '../../../client';
import { STEMN_API_TOKEN } from '../../../config/stemn';
import { IInteractionsPayload } from '../../IInteractionsPayload';

export const SETUP_CALLBACK_ID = 'setup_callback_id';

export async function startSetup (payload: IInteractionsPayload): Promise<ISlackClientChatMessage> {

  // get projects

  // specify the dynamic list

  // const dialog = SETUP_DIALOG({
  //   callbackId: '123',
  //   state: 'test state',
  // });

  // const resp = await openDialog({
  //   client,
  //   triggerId: payload.trigger_id,
  //   dialog,
  // });

  return {
    text: 'text dialog',
  };
}
