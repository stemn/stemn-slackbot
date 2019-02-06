import * as _ from 'lodash';

import {
  Client,
  IClientChatPost,
  IClientFileInfo,
  IClientFileShares,
  ISlackClientChatMessage,
  postChat,
} from '../../slack';

interface MethodArguments {
  client: Client;
  fileInfo: IClientFileInfo;
  channel: string;
  message: ISlackClientChatMessage;
  broadcast: boolean;
}

export async function addFileComment ({
  client,
  fileInfo,
  channel,
  message,
  broadcast,
}: MethodArguments): Promise<IClientChatPost> {

  const { file } = fileInfo;

  const shares = _.get(file.shares, `public.${channel}`) || _.get(file.shares, `private.${channel}`) as IClientFileShares;

  const { ts, latest_reply } = shares[0];

  return postChat({
    client,
    channel,
    message,
    threadTimestamp: latest_reply || ts,
    broadcast,
  });
}
