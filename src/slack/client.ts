import { WebClient } from '@slack/client';

export class Client extends WebClient {

  public botId: string;
  public token: string;

  constructor ({ userId, token, botId }: {
    userId?: string;
    token?: string;
    botId?: string;
  }) {

    // lookup user from stemn -> get their bot token and id
    // const token = '';

    super(token);

    this.token = token || '';
    this.botId = botId || '';
  }
}
