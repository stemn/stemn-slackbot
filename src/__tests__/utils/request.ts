import * as rp from 'request-promise';

import { STEMN_SLACK_BOT_SERVER_PORT } from '../../config';
import { STEMN_SLACK_BOT_SERVER_HOST } from '../config';

export async function request ({ endpoint, method = 'GET', body = {} }: {
  endpoint: string;
  method?: string;
  body?: {};
}): Promise<rp.RequestPromise> {

  const uri = STEMN_SLACK_BOT_SERVER_HOST + ':' + STEMN_SLACK_BOT_SERVER_PORT + endpoint;

  return rp(uri, {
    method,
    body,
    json: true,
    resolveWithFullResponse: true,
  });
}
