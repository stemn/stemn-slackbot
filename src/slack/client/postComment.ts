import { IClientPostMessage } from '../../types';
import { client } from './client';

export async function postComment ({ channel, comment, threadTimestamp, broadcast = false }: {
  channel: string;
  comment: string;
  threadTimestamp: string;
  broadcast: boolean;
}): Promise<IClientPostMessage> {
  return client.chat.postMessage({
    channel,
    text: comment,
    thread_ts: threadTimestamp,
    reply_broadcast: broadcast,
    as_user: false,
  }) as Promise<IClientPostMessage>;
}
