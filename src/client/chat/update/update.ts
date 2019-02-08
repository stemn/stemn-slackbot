import { WebClient } from '@slack/client';

import { ISlackClientChatMessage } from '../messages';
import { IClientChatUpdate } from './IClientChatUpdate';

interface MethodArguments {
  channel: string;
  client: WebClient;
  message: ISlackClientChatMessage;
  messageTimestamp: string;
}

export async function updateChat ({
  client,
  channel,
  message,
  messageTimestamp,
}: MethodArguments): Promise<IClientChatUpdate> {

  const { text, attachments = [] } = message;

  return client.chat.update({
    channel,
    text,
    ts: messageTimestamp,
    as_user: false,
    attachments,
  }) as Promise<IClientChatUpdate>;
}
