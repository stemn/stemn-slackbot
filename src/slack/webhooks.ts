import { json, Request, Response, Router } from 'express';

export const webhooksMiddleware = Router();

webhooksMiddleware.use(json());

webhooksMiddleware.all('/installed', (req: Request, res: Response) => {
  // console.log('here');
  console.log({ e: req.body });

  return res.json();
});
