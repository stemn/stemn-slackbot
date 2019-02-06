import { Client } from '../../client';
import { IClientChatPost } from './IClientChatPost';

interface MethodArguments {
  client: Client;
  channel: string;
  comment: string;
  threadTimestamp?: string;
  broadcast?: boolean;
}

export async function postChat ({
  client,
  channel,
  comment,
  threadTimestamp = '',
  broadcast = false,
}: MethodArguments): Promise<IClientChatPost> {
  return client.chat.postMessage({
    channel,
    text: comment,
    thread_ts: threadTimestamp,
    reply_broadcast: broadcast,
    as_user: false,
  }) as Promise<IClientChatPost>;
}
