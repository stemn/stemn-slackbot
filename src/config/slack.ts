export interface ISlackConfig {
  STEMN_SLACK_SIGNING_SECRET: string;
}

export const {
  STEMN_SLACK_SIGNING_SECRET,
}: ISlackConfig = <any> process.env;
