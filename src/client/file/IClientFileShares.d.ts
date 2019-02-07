export interface IClientFileShares {
  readonly [key: string]: [{
    readonly reply_users: string[];
    readonly reply_users_count: number;
    readonly reply_count: number;
    readonly ts: string;
    readonly thread_ts?: string;
    readonly latest_reply?: string;
    readonly channel_name?: string;
    readonly team_id?: string;
  }];
}
