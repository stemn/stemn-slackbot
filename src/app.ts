import { CLOUD_COMPUTER_SLACKBOT_SERVER_PORT } from './config/app';
import { server } from './server';

/* tslint:disable:no-console */
server.listen(CLOUD_COMPUTER_SLACKBOT_SERVER_PORT, () => console.log(`Listening on ${CLOUD_COMPUTER_SLACKBOT_SERVER_PORT}`));
