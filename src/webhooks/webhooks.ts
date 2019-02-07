import { json, Request, Response, Router } from 'express';

import { install } from './install';

export const webhooksMiddleware = Router();

webhooksMiddleware.use(json());

webhooksMiddleware.all('/installed', (req: Request, res: Response) => {

  // respond to webhook
  res.json();

  // install({
  //   webhook: req.body,
  // });
});
