import { createReadStream } from 'fs';
import * as _ from 'lodash';

import { getBotInfo, getFileInfo, uploadFile } from '../slack/client';
import { IClientFileInfo, IShares } from '../types';
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
  const allShares = _.merge(shares.private || [], shares.public || []) as IShares;

  _.forOwn(allShares, (replies, channel) => {
    expect(replies.length).toBe(1);
  });

  return fileInfo;
}

describe('Slack Client Tests', () => {

  // it('Get Bot Info', async () => {
  //   const { bot } = await getBotInfo();

  //   expect(bot).toBeDefined();
  // });

  it('Simulate User File Upload', async () => {

    // test public channel
    const file = await testFileUpload({ channels: SLACK_PUBLIC_CHANNEL_1 });

    // share the file to another channel

    // test whether the comments followed and check the bot didn't try to recomment on the file

  });
});
