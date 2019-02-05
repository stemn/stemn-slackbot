import { createReadStream } from 'fs';

import { Client, uploadFile } from '../../slack';
import { IClientFile } from '../../types';
import { SLACK_USER_TOKEN } from '../config';

export async function uploadTestFile ({ channels }: {
  channels: string;
}): Promise<IClientFile> {

  const client = new Client({
    token: SLACK_USER_TOKEN,
  });

  return uploadFile({
    client,
    channels,
    file: createReadStream(__dirname + '/../sample_image.png'),
    filename: `TEST FILE: ${new Date()}`,
  });
}
