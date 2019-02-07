export interface IInteractionsPayload {
  type: string;
  actions: any;
  callback_id: string;
  team: {
    id: string;
    domain: string;
  };
  channel: {
    id: string;
    name: string;
  };
  user: {
    id: string;
    name: string;
  };
  action_ts: string;
  message_ts: string;
  attachment_id: string;
  token: string;
  is_app_unfurl: boolean;
  original_message: {
    type: string;
    subtype: string;
    text: string;
    ts: string;
    username: string;
    bot_id: string;
    attachments: any;
  };
  response_url: string;
  trigger_id: string;
}
