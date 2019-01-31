import * as _ from 'lodash';

import { getFileInfo, postComment, updateComment } from '../slack/client';
import { IClientFileInfo, IClientPostMessage, IEventFile, IShares } from '../types';

export async function uploadFileToStemn ({ file }: {
  file: IEventFile;
}): Promise<any> {

  try {

    const fileInfo = await getFileInfo({
      fileId: file.file_id,
    });

    // post comment that stemn is currently uploading the file
    const fileComment = await addFileComment({
      fileInfo,
      comment: `"${fileInfo.file.name}" is uploading to STEMN`,
      broadcast: true,
      channel: file.channel_id,
    });

    // upload the file to stemn => should return a link to the file

    // update the previous comment to notify that the file has been updated
    await updateComment({
      channel: fileComment.channel,
      comment: 'file uploaded',
      messageTimestamp: fileComment.ts,
    });

  } catch (e) {
    console.error(e);
  }
}

export async function addFileComment ({ fileInfo, channel, comment, broadcast }: {
  fileInfo: IClientFileInfo;
  channel: string;
  comment: string;
  broadcast: boolean;
}): Promise<IClientPostMessage> {

  const { file } = fileInfo;

  const shares = _.get(file.shares, `public.${channel}`) || _.get(file.shares, `private.${channel}`) as IShares;

  const { ts, latest_reply } = shares[0];

  return postComment({
    channel,
    comment,
    threadTimestamp: latest_reply || ts,
    broadcast,
  });
}
