import { Client, postChat, WELCOME_MESSAGE } from '../../slack';
import { IWebhookInstall } from '../../types';

interface MethodArguments {
  webhook: IWebhookInstall;
}

export async function onBoardUser ({
  webhook,
}: MethodArguments): Promise<any> {

  console.log({ webhook });

  // auth the client as the bot
  const client = new Client({
    token: webhook.bot.bot_access_token,
    botId: webhook.bot.bot_user_id,
  });

  try {

    await postChat({
      client,
      channel: webhook.incoming_webhook.channel_id,
      comment: WELCOME_MESSAGE(),
    });

  } catch (e) {
    console.error(e);
  }
}
