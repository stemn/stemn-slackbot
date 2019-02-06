import { Router } from 'express';

import {
  eventsMiddleware,
  interactionsMiddleware,
  webhooksMiddleware,
} from './routes';

export const router = Router();

router.use('/slack/events', eventsMiddleware);
router.use('/slack/interactions', interactionsMiddleware);
router.use('/slack/webhooks', webhooksMiddleware);
