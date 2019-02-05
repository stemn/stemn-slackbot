import { ITestConfig } from '../types';

export const {
  SLACK_BOT_ID,
  SLACK_BOT_TOKEN,
  SLACK_USER_ID,
  SLACK_USER_TOKEN,
  SLACK_PRIVATE_CHANNEL,
  SLACK_PUBLIC_CHANNEL,
  STEMN_SLACK_BOT_SERVER_HOST = 'localhost',
}: ITestConfig = <any> process.env;
