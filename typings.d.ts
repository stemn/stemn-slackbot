declare module "*.json" {
  export const version: string;
}

declare module '@slack/events-api';
declare module '@slack/interactive-messages';

declare interface ISlackResponse {
  readonly ok: boolean;
  readonly error?: string;
}
