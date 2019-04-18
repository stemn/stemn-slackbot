import { WebClient } from '@slack/client';
import * as rp from 'request-promise';

import {
  FILE_UPLOADED,
  FILE_UPLOADING,
  getClientToken,
  getFileInfo,
  getFilesLatestShare,
  postChat,
  updateChat,
} from '../../client';
import { IEventBody } from '../IEventBody';
import { IEventFile } from './IEventFile';

export async function uploadToStemn ({ file, eventBody }: {
  file: IEventFile;
  eventBody: IEventBody
}): Promise<any> {

  const { file_id, user_id } = file;

  // get team
  const { team_id: teamId } = eventBody;
  const token = await getClientToken({ teamId });

  const client = new WebClient(token);

  try {

    const fileInfo = await getFileInfo({
      client,
      fileId: file_id,
    });

    const { latest_reply: threadTimestamp } = getFilesLatestShare({
      fileInfo,
      channel: file.channel_id,
    });

    const { ts: messageTimestamp } = await postChat({
      client,
      channel: file.channel_id,
      message: FILE_UPLOADING({ filename: fileInfo.file.name }),
      broadcast: false,
      threadTimestamp,
    });

    const getFile = rp(fileInfo.file.url_private_download, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${client.token}`,
        'Content-type': 'application/x-www-form-urlencoded',
      },
    });

    // const uploadFile = uploadRequest({
    //   endpoint: '/api/v1/uploads',
    //   method: 'POST',
    // });

    // await uploadFile.pipe(getFile);

    const url = 'www.cloud-computer.com/project/containing/folder';

    // update the previous comment to notify that the file has been updated
    await updateChat({
      client,
      channel: file.channel_id,
      message: FILE_UPLOADED({ filename: fileInfo.file.name, url }),
      messageTimestamp,
    });

  } catch (e) {
    console.error(e);
  }
}
