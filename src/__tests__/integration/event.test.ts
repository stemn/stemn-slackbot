import * as _ from 'lodash';

import { Client, getFileInfo } from '../../slack';
import { IClientFileInfo, IClientShares } from '../../types';
import { sleep, uploadTestFile } from '../utils';

import {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_PRIVATE_CHANNEL_1,
  SLACK_PUBLIC_CHANNEL_1,
  SLACK_USER_TOKEN,
} from '../config';

describe('Slack Events', () => {

  it('User Uploaded to Public Channel', async () => {

    // test public channel
    await testFileUpload({ channels: SLACK_PUBLIC_CHANNEL_1 });

  });

  it('User Uploaded to Private Channel', async () => {

    // test private channel
     await testFileUpload({ channels: SLACK_PRIVATE_CHANNEL_1 });

  });
});

async function testFileUpload ({ channels }: {
  channels: string;
}): Promise<IClientFileInfo> {

  const userClient = new Client({
    token: SLACK_USER_TOKEN,
  });

  const botClient = new Client({
    botId: SLACK_BOT_ID,
    token: SLACK_BOT_TOKEN,
  });

  // simulate user file upload
  const { ok, file } = await uploadTestFile({
    client: userClient,
    channels,
  });

  // check response from slack was ok
  expect(ok).toBeTruthy();

  // wait for the bot to comment on the file
  await sleep(2);

  // check the file has one comment from the stemn slack bot
  const fileInfo = await getFileInfo({
    client: botClient,
    fileId: file.id,
  });

  // check response from slack was ok
  expect(fileInfo.ok).toBeTruthy();

  const shares = fileInfo.file.shares;
  const allShares = _.merge(shares.private || [], shares.public || []) as IClientShares;

  _.forOwn(allShares, (replies) => {
    expect(replies.length).toBe(1);
  });

  return fileInfo;
}
