import { IClientBotInfo } from '../../types';
import { client } from './client';

export async function getBotInfo (): Promise<IClientBotInfo> {
  return client.bots.info() as Promise<IClientBotInfo>;
}
