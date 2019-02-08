import { WebClient } from '@slack/client';

import { IClientFileInfo } from './IClientFileInfo';

interface MethodArguments {
  fileId: string;
  client: WebClient;
}

export async function getFileInfo ({
  client,
  fileId,
}: MethodArguments): Promise<IClientFileInfo> {
  return client.files.info({
    file: fileId,
  }) as Promise<IClientFileInfo>;
}
