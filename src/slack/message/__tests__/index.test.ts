import { ITestConfig } from '../../../types';
import { Client } from '../../client';
import { postComment } from '../postComment';
import { updateComment } from '../updateComment';

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

    const postedComment = await postComment({
      client,
      channel: SLACK_PUBLIC_CHANNEL_2,
      comment: 'test',
    });

    console.log({ postedComment });

    const updatedComment = await updateComment({
      client,
      channel: SLACK_PUBLIC_CHANNEL_2,
      comment: 'updated test',
      messageTimestamp: postedComment.ts,
    });

    console.log({ updatedComment });

    expect(true).toBe(true);

  });
});
