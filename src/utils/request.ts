import { Response } from 'request';
import * as rp from 'request-promise';

import {
  STEMN_API_HOST,
  STEMN_API_PORT,
  STEMN_API_PROTOCOL,
  STEMN_API_TOKEN,
} from '../config/stemn';

interface MethodArguments {
  method: 'GET' | 'POST';
  endpoint: string;
  baseUrl?: string;
  body?: {};
  qs?: {};
  headers?: {};
}

export async function request ({
  baseUrl = `${STEMN_API_PROTOCOL}://${STEMN_API_HOST}:${STEMN_API_PORT}`,
  endpoint,
  body = {},
  qs = {},
  method,
  headers = {},
}: MethodArguments): Promise<Response> {

  const uri = `${baseUrl}/${endpoint}`;

  return rp(uri, {
    method,
    headers: {
      Authorization: `Bearer ${STEMN_API_TOKEN}`,
      ...headers,
    },
    qs,
    body,
  });
}
