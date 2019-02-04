import { ISlackResponse } from '../../ISlackResponse';

export interface IClientFileAddComment extends ISlackResponse {
  readonly comment?: {
    readonly id: string;
    readonly created: number;
    readonly timestamp: number;
    readonly user: string;
    readonly comment: string;
    readonly channel: string;
  };
}
