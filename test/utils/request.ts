import * as rp from 'request-promise';

import { CLOUD_COMPUTER_SLACKBOT_SERVER_PORT } from '../../src/config/app';
import { CLOUD_COMPUTER_SLACKBOT_SERVER_HOST } from '../config';

export async function request ({ endpoint, method = 'GET', body = {} }: {
  endpoint: string;
  method?: string;
  body?: {};
}): Promise<rp.RequestPromise> {

  const uri = CLOUD_COMPUTER_SLACKBOT_SERVER_HOST + ':' + CLOUD_COMPUTER_SLACKBOT_SERVER_PORT + endpoint;

  return rp(uri, {
    method,
    body,
    json: true,
    resolveWithFullResponse: true,
  });
}
