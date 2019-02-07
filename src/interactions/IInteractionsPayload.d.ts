import { AttachmentAction } from '@slack/client';

export interface IInteractionsPayload {
  type: string;
  actions: AttachmentAction[];
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
    attachments: {
      callback_id: string;
      fallback: string;
      text: string;
      id: number;
      color: string;
      actions: AttachmentAction[];
    }
  };
  response_url: string;
  trigger_id: string;
}
