import { WebClient } from '@slack/client';

import {
  SLACK_PUBLIC_CHANNEL,
  SLACK_PUBLIC_CHANNEL_FILE_ID,
  SLACK_TEAM_ID,
  SLACK_USER_ID,
  SLACKBOT_TOKEN,
} from '../../../test/config';
import { getFileInfo } from '../../client';
import { IEventBody } from '../IEventBody';
import { IEventFile } from './IEventFile';
import { uploadToStemn } from './uploadToStemn';

jest.mock('../../client/getClientToken', () => {
  return {
    getClientToken: () => SLACKBOT_TOKEN,
  };
});

it('Upload To Stemn', async () => {

  const client = new WebClient(SLACKBOT_TOKEN);

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
