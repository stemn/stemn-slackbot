import { IClientMessagePost } from '../../types';
import { Client } from '../client';

export async function postChat ({ client, channel, comment, threadTimestamp = '', broadcast = false }: {
  client: Client;
  channel: string;
  comment: string;
  threadTimestamp?: string;
  broadcast?: boolean;
}): Promise<IClientMessagePost> {
  return client.chat.postMessage({
    channel,
    text: comment,
    thread_ts: threadTimestamp,
    reply_broadcast: broadcast,
    as_user: false,
  }) as Promise<IClientMessagePost>;
}
