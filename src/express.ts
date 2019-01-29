import { Request, Response, Router } from 'express';
import * as morgan from 'morgan';
import { version } from 'pjson';

import { slackRouter } from './events';

export const router = Router();

router.use(morgan('dev'));
router.use(slackRouter);

router.get('/version', (_: Request, res: Response) => res.json({ version }));
