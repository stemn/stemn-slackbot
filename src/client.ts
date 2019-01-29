import { WebClient } from '@slack/client';

import { SLACK_BOT_USER_TOKEN } from './config';
import { IAddFileCommentResponse, IChannelInfoResponse, IFileInfoResponse } from './types';

const web = new WebClient(SLACK_BOT_USER_TOKEN);

export async function getWorkspaceChannels (): Promise<IChannelInfoResponse> {
  return web.channels.list() as Promise<IChannelInfoResponse>;
}

export async function addFileComment ({ fileId, comment }: {
  fileId: string;
  comment: string;
}): Promise<IAddFileCommentResponse> {
  return web.files.comments.add({
    comment,
    file: fileId,
  }) as Promise<IAddFileCommentResponse>;
}

export async function getFileInfo (fileId: string): Promise<IFileInfoResponse> {
  return web.files.info({
    file: fileId,
  }) as Promise<IFileInfoResponse>;
}
