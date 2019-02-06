import { Client } from '../../client';
import { IClientChatUpdate } from './IClientChatUpdate';

interface MethodArguments {
  channel: string;
  comment: string;
  client: Client;
  messageTimestamp: string;
}

export async function updateChat ({
  client,
  channel,
  comment,
  messageTimestamp,
}: MethodArguments): Promise<IClientChatUpdate> {
  return client.chat.update({
    channel,
    text: comment,
    ts: messageTimestamp,
    as_user: false,
  }) as Promise<IClientChatUpdate>;
}
