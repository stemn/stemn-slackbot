import { CHOOSE_FOLDER } from '../slack';

interface IPayload {
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

export async function attachFolder (payload: IPayload, respond: any): Promise<any> {

  // get folders with slack user id

  const folders = [{
    name: '1',
    id: '1',
  }];

  const message = CHOOSE_FOLDER({
    folders,
    callbackId: '',
  });

  respond(message);

  // Before the work completes, return a message object that is the same as the original but with
  // the interactive elements removed.
  const reply = payload.original_message;
  delete reply.attachments[0].actions;
  return reply;
}
