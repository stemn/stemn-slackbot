import { IClientMessage } from './IClientMessage';

export interface IClientMessagePost extends IClientMessage {
  readonly channel: string;
  readonly ts: string;
  readonly message: {
      readonly text: string;
      readonly username: string;
      readonly bot_id: string;
      readonly attachments: [{
              readonly text: string;
              readonly id: number,
              readonly fallback: string;
      }];
      readonly type: string;
      readonly subtype: string;
      readonly ts: string;
  };
}
