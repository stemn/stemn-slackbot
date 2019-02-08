import { ERROR_RESPONSE, ISlackClientChatMessage } from '../client';
import { IInteractionsPayload } from './IInteractionsPayload';

export type InteractionFunction = (payload: IInteractionsPayload) => Promise<ISlackClientChatMessage>;

export const handler = (fn: InteractionFunction) => async (payload: IInteractionsPayload, respond: any) => {

  try {
    const message = await fn(payload);
    respond(message);
  } catch (e) {
    console.error(e);

    const message = ERROR_RESPONSE();
    respond(message);
  }
};
