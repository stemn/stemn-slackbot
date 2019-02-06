import * as express from 'express';
import * as morgan from 'morgan';
import { version } from 'pjson';

import {
  eventsMiddleware,
  interactionsMiddleware,
  webhooksMiddleware,
} from './api';

const router = express.Router();

router.use(morgan('dev'));

router.use('/slack/events', eventsMiddleware);
router.use('/slack/interactions', interactionsMiddleware);
router.use('/slack/webhooks', webhooksMiddleware);

router.get('/version', (_, res) => res.json({ version }));

export const server = express().use('/api', router);
