import { ITestConfig } from '../../../types';
import { Client } from '../../client';
import { postChat } from '../postChat';
import { updateChat } from '../updateChat';

const {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_PUBLIC_CHANNEL_2,
}: ITestConfig = <any> process.env;

describe('Post and Update a Comment', () => {

  it('Post Comment and then update the text', async () => {

    const client = new Client({
      botId: SLACK_BOT_ID,
      token: SLACK_BOT_TOKEN,
    });

    const postedComment = await postChat({
      client,
      channel: SLACK_PUBLIC_CHANNEL_2,
      comment: 'test',
    });

    expect(postedComment.ok).toBe(true);

    const updatedComment = await updateChat({
      client,
      channel: SLACK_PUBLIC_CHANNEL_2,
      comment: 'updated test',
      messageTimestamp: postedComment.ts,
    });

    expect(updatedComment.ok).toBe(true);
  });
});
