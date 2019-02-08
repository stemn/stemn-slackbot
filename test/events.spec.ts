import { WebClient } from '@slack/client';
import * as _ from 'lodash';

import {
  getFileInfo,
  IClientFileInfo,
  IClientFileShares,
} from '../src/client';

import { sleep, uploadTestFile } from './utils';

import {
  SLACK_BOT_TOKEN,
  SLACK_PRIVATE_CHANNEL,
  SLACK_PUBLIC_CHANNEL,
} from './config';

const timeout = 15 * 1000;

describe('Slack Events', () => {

  it('User Uploaded to Public Channel', async () => {

    // test public channel
    await testFileUpload({ channels: SLACK_PUBLIC_CHANNEL });

  }, timeout);

  it('User Uploaded to Private Channel', async () => {

    // test private channel
     await testFileUpload({ channels: SLACK_PRIVATE_CHANNEL });

  }, timeout);
});

async function testFileUpload ({ channels }: {
  channels: string;
}): Promise<IClientFileInfo> {

  // simulate user file upload
  const { ok, file } = await uploadTestFile({
    channels,
  });

  // check response from slack was ok
  expect(ok).toBeTruthy();

  // wait for the bot to comment on the file
  await sleep(2);

  const client = new WebClient(SLACK_BOT_TOKEN);

  // check the file has one comment from the stemn slack bot
  const fileInfo = await getFileInfo({
    client,
    fileId: file.id,
  });

  // check response from slack was ok
  expect(fileInfo.ok).toBeTruthy();

  const shares = fileInfo.file.shares;
  const allShares = _.merge(shares.private || [], shares.public || []) as IClientFileShares;

  _.forOwn(allShares, (replies) => {
    expect(replies.length).toBe(1);
  });

  return fileInfo;
}
