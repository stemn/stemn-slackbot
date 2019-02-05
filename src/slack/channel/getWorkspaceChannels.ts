import { IClientChannelInfo } from '../../types';
import { Client } from '../client';

export async function getWorkspaceChannels ({ client }: {
  client: Client;
}): Promise<IClientChannelInfo> {
  return client.channels.list() as Promise<IClientChannelInfo>;
}
