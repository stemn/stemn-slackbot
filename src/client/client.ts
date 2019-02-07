import { WebClient } from '@slack/client';

export class Client extends WebClient {

  constructor ({ userId, token }: {
    userId?: string;
    token?: string;
  }) {

    let botToken = token;

    if (userId) {
      // lookup user from stemn -> get their bot token and id
      botToken = getBotToken({ userId: '' });
    }

    super(botToken);
  }
}

// TODO: Implement once api becomes available...
function getBotToken ({ userId }: {
  userId: string;
}): string {
  return process.env.SLACK_BOT_TOKEN || '';
}
