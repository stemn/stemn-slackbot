import * as _ from 'lodash';
import * as rp from 'request-promise';

import { getFileInfo, postComment, updateComment } from '../slack/client';
import { IClientFileInfo, IClientMessagePost, IClientShares, IEventFile } from '../types';

import {
  SLACK_BOT_USER_TOKEN,
  STEMN_API_HOST,
  STEMN_API_PORT,
  STEMN_API_PROTOCOL,
  STEMN_API_TOKEN,
} from '../config';

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

    const getFile = rp(fileInfo.file.url_private_download, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${SLACK_BOT_USER_TOKEN}`,
        'Content-type': 'application/x-www-form-urlencoded',
      },
    });

    // const uploadFile = rp(`${STEMN_API_PROTOCOL}://${STEMN_API_HOST}:${STEMN_API_PORT}/api/v1/uploads`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${STEMN_API_TOKEN}`,
    //   },
    // });

    // await uploadFile.pipe(getFile);

    // update the previous comment to notify that the file has been updated
    await updateComment({
      channel: fileComment.channel,
      comment: `"${fileInfo.file.name}" has been uploaded to STEMN`,
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
}): Promise<IClientMessagePost> {

  const { file } = fileInfo;

  const shares = _.get(file.shares, `public.${channel}`) || _.get(file.shares, `private.${channel}`) as IClientShares;

  const { ts, latest_reply } = shares[0];

  return postComment({
    channel,
    comment,
    threadTimestamp: latest_reply || ts,
    broadcast,
  });
}
