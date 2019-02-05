import { IClientFile } from '../../types';
import { Client } from '../client';

export async function uploadFile ({ client, channels, file, filename = 'New File', filetype = 'auto', comment = '' }: {
  channels: string;
  client: Client;
  comment?: string;
  file: any;
  filename?: string;
  filetype?: string;
}): Promise<IClientFile> {

  return client.files.upload({
    channels,
    filename,
    file,
    filetype,
    initial_comment: comment,
  }) as Promise<IClientFile>;
}
