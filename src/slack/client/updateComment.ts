import { IClientUpdateMessage } from '../../types';
import { client } from './client';

export async function updateComment ({ channel, comment, messageTimestamp }: {
  channel: string;
  comment: string;
  messageTimestamp: string;
}): Promise<IClientUpdateMessage> {
  return client.chat.update({
    channel,
    text: comment,
    ts: messageTimestamp,
    as_user: false,
  }) as Promise<IClientUpdateMessage>;
}
