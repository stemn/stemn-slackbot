import { IClientFileInfo } from '../../types';
import { Client } from '../client';

export async function getFileInfo ({ client, fileId }: {
  fileId: string;
  client: Client;
}): Promise<IClientFileInfo> {
  return client.files.info({
    file: fileId,
  }) as Promise<IClientFileInfo>;
}
