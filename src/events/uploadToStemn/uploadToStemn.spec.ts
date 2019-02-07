import { WebClient } from '@slack/client';

import { getFileInfo } from '../../client';
import { addFileComment } from './addFileComment';
import { IEventFile } from './IEventFile';
import { uploadToStemn } from './uploadToStemn';

import {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_PUBLIC_CHANNEL,
  SLACK_PUBLIC_CHANNEL_FILE_ID,
  SLACK_USER_ID,
} from '../../../test/config';

jest.mock('../../client/client', () => {
  return {
      Client : jest.fn().mockImplementation(() => new WebClient(SLACK_BOT_TOKEN)),
  };
});

it('Upload To Stemn', async () => {

  const client = new WebClient(SLACK_BOT_TOKEN);

  const fileEvent = <IEventFile> {
    user_id: SLACK_USER_ID,
    file_id: SLACK_PUBLIC_CHANNEL_FILE_ID,
    channel_id: SLACK_PUBLIC_CHANNEL,
  };

  await uploadToStemn({
    file: fileEvent,
  });

  // expect(addFileComment).toHaveBeenCalledTimes(1);

  const { ok } = await getFileInfo({
    client,
    fileId: fileEvent.file_id,
  });

  expect(ok).toBe(true);
});
