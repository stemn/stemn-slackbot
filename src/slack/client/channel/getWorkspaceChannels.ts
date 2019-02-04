import { IClientChannelInfo } from '../../../types';
import { client } from '../client';

export async function getWorkspaceChannels (): Promise<IClientChannelInfo> {
  return client.channels.list() as Promise<IClientChannelInfo>;
}
