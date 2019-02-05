import * as _ from 'lodash';

import { Client, postComment } from '../../slack';
import { IClientFileInfo, IClientMessagePost, IClientShares } from '../../types';

export async function addFileComment ({ client, fileInfo, channel, comment, broadcast }: {
  client: Client;
  fileInfo: IClientFileInfo;
  channel: string;
  comment: string;
  broadcast: boolean;
}): Promise<IClientMessagePost> {

  const { file } = fileInfo;

  const shares = _.get(file.shares, `public.${channel}`) || _.get(file.shares, `private.${channel}`) as IClientShares;

  const { ts, latest_reply } = shares[0];

  return postComment({
    client,
    channel,
    comment,
    threadTimestamp: latest_reply || ts,
    broadcast,
  });
}
