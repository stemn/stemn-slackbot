import { ISlackResponse } from '../../types';

export interface IClientChat extends ISlackResponse {
  readonly channel: string;
  readonly ts: string;
}
