import { WebClient } from '@slack/client';

import { IClientFile } from '../IClientFile';

interface MethodArguments {
  channels: string;
  client: WebClient;
  comment?: string;
  file: any;
  filename?: string;
  filetype?: string;
}

export async function uploadFile ({
  client,
  channels,
  file,
  filename = 'New File',
  filetype = 'auto',
  comment = '',
}: MethodArguments): Promise<IClientFile> {

  return client.files.upload({
    channels,
    filename,
    file,
    filetype,
    initial_comment: comment,
  }) as Promise<IClientFile>;
}
