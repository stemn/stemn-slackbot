import * as _ from 'lodash';

import {
  IClientFileInfo,
  IClientFileShare,
  IClientFileShares,
} from './';

interface MethodArguments {
  fileInfo: IClientFileInfo;
  channel: string;
}

export function getFilesLatestShare ({
  fileInfo,
  channel,
}: MethodArguments): IClientFileShare {

  const { file } = fileInfo;

  const shares = _.get(file.shares, `public.${channel}`) || _.get(file.shares, `private.${channel}`) as IClientFileShares;

  return shares[0];
}
