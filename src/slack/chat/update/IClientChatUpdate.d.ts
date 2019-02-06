import { IClientChat } from '../IClientChat';

export interface IClientChatUpdate extends IClientChat {
  readonly text: string;
}
