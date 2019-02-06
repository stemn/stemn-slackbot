import * as express from 'express';
import * as morgan from 'morgan';
import { version } from 'pjson';

import {
  router as apiRouter,
} from './api';

const router = express.Router();

router.use(morgan('dev'));
router.use(apiRouter);
router.get('/version', (_, res) => res.json({ version }));

export const server = express().use('/api', router);
