import { Client } from '../../../slack';
import { ITestConfig } from '../../../types';
import { uploadToStemn } from '../uploadToStemn';

const {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_PUBLIC_CHANNEL_2,
}: ITestConfig = <any> process.env;

it('Upload To Stemn', async () => {

  // const client = new Client({
  //   botId: SLACK_BOT_ID,
  //   token: SLACK_BOT_TOKEN,
  // });

  // const uploaded = await uploadToStemn({
  //   client,

  // });

});
