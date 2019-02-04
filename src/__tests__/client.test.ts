import { createReadStream } from 'fs';
import * as _ from 'lodash';

import { getFileInfo, uploadFile } from '../slack/client';
import { IClientFileInfo, IClientShares } from '../types';
import { sleep } from './utils';

import {
  SLACK_PRIVATE_CHANNEL_1,
  SLACK_PRIVATE_CHANNEL_2,
  SLACK_PUBLIC_CHANNEL_1,
  SLACK_PUBLIC_CHANNEL_2,
} from './config';

async function testFileUpload ({ channels }: {
  channels: string;
}): Promise<IClientFileInfo> {

  const { ok, file } = await uploadFile({
    channels,
    file: createReadStream(__dirname + '/sample_image.png'),
    filename: `TEST FILE: ${new Date()}`,
  });

  // check response from slack was ok
  expect(ok).toBeTruthy();

  // wait for the bot to comment on the file
  await sleep(2);

  // check the file has one comment from the stemn slack bot
  const fileInfo = await getFileInfo({ fileId: file.id });

  // check response from slack was ok
  expect(fileInfo.ok).toBeTruthy();

  const shares = fileInfo.file.shares;
  const allShares = _.merge(shares.private || [], shares.public || []) as IClientShares;

  _.forOwn(allShares, (replies) => {
    expect(replies.length).toBe(1);
  });

  return fileInfo;
}

describe('Slack Client File Upload Tests', () => {

  it('Simulate User File Upload to Public Channel', async () => {

    // test public channel
    await testFileUpload({ channels: SLACK_PUBLIC_CHANNEL_1 });

  });

  it('Simulate User File Upload to Private Channel', async () => {

    // test private channel
     await testFileUpload({ channels: SLACK_PRIVATE_CHANNEL_1 });

  });
});
