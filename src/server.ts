import * as express from 'express';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { version } from 'pjson';

import { eventsMiddleware } from './events';
import { interactionsMiddleware } from './interactions';
import { webhooksMiddleware } from './webhooks';

const router = express.Router();

router.use(morgan('dev'));
router.use(helmet());

router.use('/slack/events', eventsMiddleware);
router.use('/slack/interactions', interactionsMiddleware);
router.use('/slack/webhooks', webhooksMiddleware);
router.get('/version', (_, res) => res.json({ version }));

export const server = express().use('/api', router);
