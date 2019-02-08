import * as Ajv from 'ajv';
import { NextFunction, Request, Response } from 'express';
import * as _ from 'lodash';

const ajv = new Ajv({ logger: false, allErrors: true });

export const validateMiddleware = (schema: any) => {

  const compiledSchema = ajv.compile(schema);

  return (req: Request, res: Response, next: NextFunction) => {

    const result = compiledSchema(req.body);

    if (result) {
      next();
    } else {
      return res.status(400).json();
    }
  };
};
