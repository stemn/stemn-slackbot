import { Client } from '../../client';
import { IClientFileInfo } from './IClientFileInfo';

interface MethodArguments {
  fileId: string;
  client: Client;
}

export async function getFileInfo ({
  client,
  fileId,
}: MethodArguments): Promise<IClientFileInfo> {
  return client.files.info({
    file: fileId,
  }) as Promise<IClientFileInfo>;
}
