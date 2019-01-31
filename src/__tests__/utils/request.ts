import fetch, { Response } from 'node-fetch';

import { STEMN_SLACK_BOT_SERVER_PORT } from '../../config';
import { STEMN_SLACK_BOT_SERVER_HOST } from '../config';

export async function request ({ endpoint, method = 'GET' }: {
  endpoint: string;
  method?: string;
}): Promise<Response> {

  const uri = STEMN_SLACK_BOT_SERVER_HOST + ':' + STEMN_SLACK_BOT_SERVER_PORT + endpoint;

  return fetch(uri, {
    method,
  });
}
