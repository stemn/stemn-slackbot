import { json, Request, Response, Router } from 'express';

import { IWebhookInstall } from '../../schemas';
import { install } from './install';
import { validateMiddleware } from './middleware';

export const webhooksMiddleware = Router();

webhooksMiddleware.use(json());
webhooksMiddleware.post('/installed', validateMiddleware(IWebhookInstall), (req: Request, res: Response) => {

  // respond to webhook
  res.json();

  install({
    webhook: req.body,
  });
});
