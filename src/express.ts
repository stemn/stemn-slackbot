import { Request, Response, Router } from 'express';
import * as morgan from 'morgan';
import { version } from 'pjson';

import {
  eventsMiddleware,
  interactionsMiddleware,
  webhooksMiddleware,
} from './api';

export const router = Router();

router.use(morgan('dev'));

router.use('/slack/events', eventsMiddleware);
router.use('/slack/interactions', interactionsMiddleware);
router.use('/slack/webhooks', webhooksMiddleware);

router.get('/version', (_: Request, res: Response) => res.json({ version }));
