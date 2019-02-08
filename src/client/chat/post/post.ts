import { WebClient } from '@slack/client';

import { ISlackClientChatMessage } from '../messages';
import { IClientChatPost } from './IClientChatPost';

interface MethodArguments {
  broadcast?: boolean;
  channel: string;
  client: WebClient;
  message: ISlackClientChatMessage;
  threadTimestamp?: string;
}

export async function postChat ({
  broadcast = false,
  channel,
  client,
  message,
  threadTimestamp = '',
}: MethodArguments): Promise<IClientChatPost> {

  const { text, attachments = [] } = message;

  return client.chat.postMessage({
    channel,
    text,
    thread_ts: threadTimestamp,
    reply_broadcast: broadcast,
    as_user: false,
    attachments,
  }) as Promise<IClientChatPost>;
}
