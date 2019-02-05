import { createReadStream } from 'fs';

import { Client, uploadFile } from '../../slack';
import { IClientFile } from '../../types';

export async function uploadTestFile ({ client, channels }: {
  client: Client;
  channels: string;
}): Promise<IClientFile> {
  return uploadFile({
    client,
    channels,
    file: createReadStream(__dirname + '/../sample_image.png'),
    filename: `TEST FILE: ${new Date()}`,
  });
}
