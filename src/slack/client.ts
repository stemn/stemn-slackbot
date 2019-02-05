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
      // TODO: Implement once api becomes available...
    const usersBotToken = getBotToken({ userId });

    super(token || usersBotToken);

    this.token = token || '';
    this.botId = botId || '';
  }
}

function getBotToken ({ userId }: {
  userId: string;
}): string {
  return process.env.SLACK_BOT_TOKEN || '';
}
