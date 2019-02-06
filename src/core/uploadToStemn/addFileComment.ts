import * as _ from 'lodash';

import {
  Client,
  IClientChatPost,
  IClientFileInfo,
  IClientFileShares,
  postChat,
} from '../../slack';

export async function addFileComment ({ client, fileInfo, channel, comment, broadcast }: {
  client: Client;
  fileInfo: IClientFileInfo;
  channel: string;
  comment: string;
  broadcast: boolean;
}): Promise<IClientChatPost> {

  const { file } = fileInfo;

  const shares = _.get(file.shares, `public.${channel}`) || _.get(file.shares, `private.${channel}`) as IClientFileShares;

  const { ts, latest_reply } = shares[0];

  return postChat({
    client,
    channel,
    comment,
    threadTimestamp: latest_reply || ts,
    broadcast,
  });
}
