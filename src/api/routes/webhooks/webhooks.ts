import { json, Request, Response, Router } from 'express';

import { onBoardUser } from '../../../core/onBoardUser';

export const webhooksMiddleware = Router();

webhooksMiddleware.use(json());

webhooksMiddleware.all('/installed', (req: Request, res: Response) => {

  // respond to webhook
  res.json();

  // onBoardUser({
  //   webhook: req.body,
  // });
});
