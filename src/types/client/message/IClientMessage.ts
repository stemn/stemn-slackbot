import { ISlackResponse } from '../../ISlackResponse';

export interface IClientMessage extends ISlackResponse {
  readonly channel: string;
  readonly ts: string;
}
