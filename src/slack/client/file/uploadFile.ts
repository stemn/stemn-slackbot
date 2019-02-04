import { IClientFile } from '../../../types';
import { client } from '../client';

export async function uploadFile ({ channels, file, filename = 'New File', filetype = 'auto', comment = '' }: {
  channels: string;
  file: any;
  filename?: string;
  filetype?: string;
  comment?: string;
}): Promise<IClientFile> {

  return client.files.upload({
    channels,
    filename,
    file,
    filetype,
    initial_comment: comment,
  }) as Promise<IClientFile>;
}
