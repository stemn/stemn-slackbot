import { json, Router } from 'express';

import { IWebhookInstall, IWebhookOptions } from '../../schemas';
import { parseUrlPayload, validate } from './middleware';
import { install, options } from './routes';

export const webhooksMiddleware = Router();

webhooksMiddleware.post('/installed', json(), validate(IWebhookInstall), install);
webhooksMiddleware.post('/menu-options', parseUrlPayload, validate(IWebhookOptions), options);
