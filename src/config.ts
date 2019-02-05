import { IConfig } from './types';

export const {
  STEMN_API_HOST = 'api.stemn',
  STEMN_API_PROTOCOL = 'http',
  STEMN_API_PORT = 3000,
  STEMN_API_TOKEN,
  STEMN_SLACK_SIGNING_SECRET,
  STEMN_SLACK_BOT_SERVER_PORT = 3000,
}: IConfig = <any> process.env;
