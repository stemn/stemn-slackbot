import { ISlackClientChatMessage } from '../../../client';
import { IInteractionsPayload } from '../../IInteractionsPayload';

export const SETUP_COMPLETED_CALLBACK_ID = 'setup_completed_callback_id';

export async function completedSetup (payload: IInteractionsPayload): Promise<ISlackClientChatMessage> {

  return {
    text: 'Completed',
  };
}
