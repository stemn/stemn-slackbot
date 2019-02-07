export interface IWebhookInstall extends ISlackResponse {
  readonly access_token: string;
  readonly scope: string;
  readonly user_id: string;
  readonly team_name: string;
  readonly team_id: string;
  readonly incoming_webhook: {
      readonly channel: string;
      readonly channel_id: string;
      readonly configuration_url: string;
      readonly url: string;
  };
  readonly bot: {
    readonly bot_user_id: string;
    readonly bot_access_token: string;
  };
}
