import { WebClient } from '@slack/client';

import { getFileInfo } from '../../client';
import { IEventFile } from './IEventFile';
import { uploadToStemn } from './uploadToStemn';

import {
  SLACK_BOT_TOKEN,
  SLACK_PUBLIC_CHANNEL,
  SLACK_PUBLIC_CHANNEL_FILE_ID,
  SLACK_TEAM_ID,
  SLACK_USER_ID,
} from '../../../test/config';
import { IEventBody } from '../IEventBody';

jest.mock('../../client/getClientToken', () => {
  return {
    getClientToken: () => SLACK_BOT_TOKEN,
  };
});

it('Upload To Stemn', async () => {

  const client = new WebClient(SLACK_BOT_TOKEN);

  const fileEvent = <IEventFile> {
    user_id: SLACK_USER_ID,
    file_id: SLACK_PUBLIC_CHANNEL_FILE_ID,
    channel_id: SLACK_PUBLIC_CHANNEL,
  };

  const eventBody = <IEventBody> {
    team_id: SLACK_TEAM_ID,
  };

  await uploadToStemn({
    file: fileEvent,
    eventBody,
  });

  const { ok } = await getFileInfo({
    client,
    fileId: fileEvent.file_id,
  });

  expect(ok).toBe(true);
});
