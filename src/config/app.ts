export interface IAppConfig {
  CLOUD_COMPUTER_SLACKBOT_SERVER_PORT: string;
}

export const {
  CLOUD_COMPUTER_SLACKBOT_SERVER_PORT = '3000',
}: IAppConfig = <any> process.env;
