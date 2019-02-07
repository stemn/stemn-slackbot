import { Client } from '../client';
import {
  FILE_UPLOADED,
  FILE_UPLOADING,
  postChat,
  updateChat,
} from './';

import {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_PUBLIC_CHANNEL,
} from '../../../test/config';

describe('Client Chat Tests', () => {

  it('Post Comment and then Update the text', async () => {

    const client = new Client({
      token: SLACK_BOT_TOKEN,
    });

    const postedComment = await postChat({
      client,
      channel: SLACK_PUBLIC_CHANNEL,
      message: FILE_UPLOADING('Test Message'),
    });

    expect(postedComment.ok).toBe(true);

    const updatedComment = await updateChat({
      client,
      channel: SLACK_PUBLIC_CHANNEL,
      message: FILE_UPLOADED('Test Message', 'Updated'),
      messageTimestamp: postedComment.ts,
    });

    expect(updatedComment.ok).toBe(true);
  });
});
