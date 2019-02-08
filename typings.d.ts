declare module "*.json" {
  const value: any;
  export default value;
}

declare module '@slack/events-api';
declare module '@slack/interactive-messages';

declare interface ISlackResponse {
  readonly ok: boolean;
  readonly error?: string;
}
