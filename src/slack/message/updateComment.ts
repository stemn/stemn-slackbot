import { IClientMessageUpdate } from '../../types';
import { Client } from '../client';

export async function updateComment ({ client, channel, comment, messageTimestamp }: {
  channel: string;
  comment: string;
  client: Client;
  messageTimestamp: string;
}): Promise<IClientMessageUpdate> {
  return client.chat.update({
    channel,
    text: comment,
    ts: messageTimestamp,
    as_user: false,
  }) as Promise<IClientMessageUpdate>;
}
