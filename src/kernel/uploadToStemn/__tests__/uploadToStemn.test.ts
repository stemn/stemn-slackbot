import { Client } from '../../../slack';
import { IEventFile, ITestConfig } from '../../../types';
import { uploadToStemn } from '../uploadToStemn';

const {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_USER_ID,
  SLACK_PUBLIC_CHANNEL_1,
  SLACK_PUBLIC_CHANNEL_1_FILE_ID,
}: ITestConfig = <any> process.env;

it('Upload To Stemn', async () => {

  const client = new Client({
    botId: SLACK_BOT_ID,
    token: SLACK_BOT_TOKEN,
  });

  const fileEvent = <IEventFile> {
    user_id: SLACK_USER_ID,
    file_id: SLACK_PUBLIC_CHANNEL_1_FILE_ID,
    channel_id: SLACK_PUBLIC_CHANNEL_1,
  };

  const uploaded = await uploadToStemn({
    client,
    file: fileEvent,
  });

  console.log({ uploaded });

});
