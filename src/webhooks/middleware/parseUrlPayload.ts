
import { NextFunction, Request, Response, urlencoded } from 'express';

const decoder = urlencoded({ extended: true });

export function parseUrlPayload (req: Request, res: Response, next: NextFunction) {
  decoder(req, res, () => {
    req.body = JSON.parse(req.body.payload);
    next();
  });
}
