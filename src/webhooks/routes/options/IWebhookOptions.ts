export interface IWebhookOptions {
  type: string;
  token: string;
  action_ts: string;
  team: {
    id: string;
    domain: string;
  };
  user: {
    id: string;
    name: string;
  };
  channel: {
    id: string;
    name: string;
  };
  name: string;
  value: string;
  callback_id: string;
}
