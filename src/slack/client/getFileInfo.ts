import { IClientFileInfo } from '../../types';
import { client } from './client';

export async function getFileInfo ({ fileId }: {
  fileId: string;
}): Promise<IClientFileInfo> {
  return client.files.info({
    file: fileId,
  }) as Promise<IClientFileInfo>;
}
