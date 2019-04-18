export interface IAppConfig {
  STEMN_SLACK_BOT_SERVER_PORT: string;
}

export const {
  STEMN_SLACK_BOT_SERVER_PORT = '3000',
}: IAppConfig = <any> process.env;
