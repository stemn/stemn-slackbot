import { ITestConfig } from '../types';

export const {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_USER_ID,
  SLACK_USER_TOKEN,
  SLACK_PRIVATE_CHANNEL_1,
  SLACK_PRIVATE_CHANNEL_2,
  SLACK_PUBLIC_CHANNEL_1,
  SLACK_PUBLIC_CHANNEL_2,
  STEMN_SLACK_BOT_SERVER_HOST = 'localhost',
}: ITestConfig = <any> process.env;
