import * as _ from 'lodash';

import { getBotInfo, getFileInfo, postComment } from '../slack/client';
import { IClientFileInfo, IEventFile, IShares } from '../types';

export async function uploadFileToStemn ({ file }: {
  file: IEventFile;
}): Promise<any> {

  try {

    const fileInfo = await getFileInfo({
      fileId: file.file_id,
    });

    // upload the file to stemn

    // comment on the file notifying of a successful upload
    await addFileComment({
      fileInfo,
      comment: 'File Uploaded to STEMN',
      broadcast: true,
    });

  } catch (e) {
    console.error(e);
  }
}

export async function addFileComment ({ fileInfo, comment, broadcast }: {
  fileInfo: IClientFileInfo;
  comment: string;
  broadcast: boolean;
}): Promise<any> {

  const { comments, file } = fileInfo;

  const bot = await getBotInfo();

  console.log({ bot });

  // if (comments[0].user_id === bot.bot.id) {
  //   return;
  // }

  console.log({ comments });

  const channels = file.channels;
  const shares = file.shares;

  // merge private and public channel arrays
  const allShares = _.merge(shares.private || [], shares.public || []) as IShares;

  _.forOwn(allShares, (replies, channel) => {

    const { ts, latest_reply } = replies[0];

    postComment({
      channel,
      comment,
      threadTimestamp: latest_reply || ts,
      broadcast,
    });
  });
}
