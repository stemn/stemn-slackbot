import * as _ from 'lodash';
import * as rp from 'request-promise';

import { Client, getFileInfo, updateComment } from '../../slack';
import { IEventFile } from '../../types';
import { addFileComment } from './addFileComment';

// import {
//   STEMN_API_HOST,
//   STEMN_API_PORT,
//   STEMN_API_PROTOCOL,
//   STEMN_API_TOKEN,
// } from '../config';

export async function uploadToStemn ({ file, client }: {
  file: IEventFile;
  client?: Client;
}): Promise<any> {

  const { file_id, user_id } = file;

  client = client || new Client({ userId: user_id });

  try {

    const fileInfo = await getFileInfo({
      client,
      fileId: file_id,
    });

    // post comment that stemn is currently uploading the file
    const { channel, ts } = await addFileComment({
      client,
      fileInfo,
      comment: `"${fileInfo.file.name}" is uploading to STEMN`,
      broadcast: true,
      channel: file.channel_id,
    });

    const getFile = rp(fileInfo.file.url_private_download, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${client.token}`,
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
      client,
      channel,
      comment: `"${fileInfo.file.name}" has been uploaded to STEMN`,
      messageTimestamp: ts,
    });

  } catch (e) {
    console.error(e);
  }
}
