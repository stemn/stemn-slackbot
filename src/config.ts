interface IEnv {
  STEMN_API_HOST: string;
  STEMN_API_PROTOCOL: string;
  STEMN_API_PORT: number;
  STEMN_API_TOKEN: string;
  SLACK_BOT_USER_TOKEN: string;
  SLACK_SIGNING_SECRET: string;
  STEMN_SLACK_BOT_SERVER_PORT: number;
}

export const {
  STEMN_API_HOST = 'api.stemn',
  STEMN_API_PROTOCOL = 'http',
  STEMN_API_PORT = 3000,
  STEMN_API_TOKEN,
  SLACK_BOT_USER_TOKEN,
  SLACK_SIGNING_SECRET,
  STEMN_SLACK_BOT_SERVER_PORT = 3000,
}: IEnv = <any> process.env;
