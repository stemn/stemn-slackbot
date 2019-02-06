import { Client } from '../../client';
import { ISlackClientChatMessage } from '../messages';
import { IClientChatUpdate } from './IClientChatUpdate';

interface MethodArguments {
  channel: string;
  client: Client;
  message: ISlackClientChatMessage;
  messageTimestamp: string;
}

export async function updateChat ({
  client,
  channel,
  message,
  messageTimestamp,
}: MethodArguments): Promise<IClientChatUpdate> {

  const { comment, attachments = [] } = message;

  return client.chat.update({
    channel,
    text: comment,
    ts: messageTimestamp,
    as_user: false,
    attachments,
  }) as Promise<IClientChatUpdate>;
}
