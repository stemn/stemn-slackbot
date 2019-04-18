export interface ISlackConfig {
  CLOUD_COMPUTER_SLACK_SIGNING_SECRET: string;
}

export const {
  CLOUD_COMPUTER_SLACK_SIGNING_SECRET,
}: ISlackConfig = <any> process.env;
