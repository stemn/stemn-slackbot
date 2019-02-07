import { Client } from '../../client';
import { IClientChannelInfo } from './IClientChannelInfo';

export async function getAllChannels ({ client }: {
  client: Client;
}): Promise<IClientChannelInfo> {
  return client.channels.list() as Promise<IClientChannelInfo>;
}
