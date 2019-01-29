import * as express from 'express';

import { STEMN_SLACK_BOT_SERVER_PORT } from './config';
import { router } from './express';

export const server = express().use('/api', router).listen(STEMN_SLACK_BOT_SERVER_PORT);
