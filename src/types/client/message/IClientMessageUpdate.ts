import { IClientMessage } from './IClientMessage';

export interface IClientMessageUpdate extends IClientMessage {
  readonly text: string;
}
