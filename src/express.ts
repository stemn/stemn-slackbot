import { Request, Response, Router } from 'express';
import * as morgan from 'morgan';
import { version } from 'pjson';

import { eventsMiddleware } from './slack/events';
import { interactionsMiddleware } from './slack/interactions';

export const router = Router();

router.use(morgan('dev'));

router.use('/slack/events', eventsMiddleware);
router.use('/slack/interactions', interactionsMiddleware);

router.get('/version', (_: Request, res: Response) => res.json({ version }));
