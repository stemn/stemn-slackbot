export interface IEventFile {
  readonly type: string;
  readonly file: {
    readonly id: string;
  };
  readonly file_id: string;
  readonly user_id: string;
  readonly event_ts: string;
  readonly channel_id: string;
}
