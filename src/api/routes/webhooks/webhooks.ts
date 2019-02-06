import { json, Request, Response, Router } from 'express';

import { welcomeUser } from '../../../core/welcomeUser';

export const webhooksMiddleware = Router();

webhooksMiddleware.use(json());

webhooksMiddleware.all('/installed', (req: Request, res: Response) => {

  // respond to webhook
  res.json();

  // welcomeUser({
  //   webhook: req.body,
  // });
});
