import { Request, Response, Router } from 'express';
import * as morgan from 'morgan';
import { version } from 'pjson';

import { events } from './slack/events';

export const router = Router();

router.use(morgan('dev'));
router.use('/slack/events', events.expressMiddleware());
router.get('/version', (_: Request, res: Response) => res.json({ version }));
