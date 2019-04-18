/* tslint:disable:no-console */
import { STEMN_SLACK_BOT_SERVER_PORT } from './config/app';
import { server } from './server';

server.listen(STEMN_SLACK_BOT_SERVER_PORT, () => console.log(`Listening on ${STEMN_SLACK_BOT_SERVER_PORT}`));
