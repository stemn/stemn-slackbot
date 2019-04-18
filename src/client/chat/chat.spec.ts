import { WebClient } from '@slack/client';
import {
  FILE_UPLOADED,
  FILE_UPLOADING,
  postChat,
  updateChat,
} from './';

import {
  SLACK_BOT_TOKEN,
  SLACK_PUBLIC_CHANNEL,
} from '../../../test/config';

describe('Client Chat Tests', () => {

  it('Post Comment and then Update the text', async () => {

    const client = new WebClient(SLACK_BOT_TOKEN);

    const postedComment = await postChat({
      client,
      channel: SLACK_PUBLIC_CHANNEL,
      message: FILE_UPLOADING({ filename: 'Test file' }),
    });

    expect(postedComment.ok).toBe(true);

    const updatedComment = await updateChat({
      client,
      channel: SLACK_PUBLIC_CHANNEL,
      message: FILE_UPLOADED({ filename: 'Test file', url: 'url file' }),
      messageTimestamp: postedComment.ts,
    });

    expect(updatedComment.ok).toBe(true);
  });
});
