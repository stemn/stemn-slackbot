import { AttachmentAction, MessageAttachment } from '@slack/client';
import * as _ from 'lodash';

const COLOUR = '#3AA3E3';

export interface ISlackClientChatMessage {
  text: string;
  attachments?: MessageAttachment[];
}

interface IAction {
  name: string;
  id: any;
}

const createAction = ({ name, id }: IAction): AttachmentAction => ({
  name,
  text: name,
  type: 'button',
  value: id,
});

function createMessage ({ title, body, fallbackBody, actions, callbackId }: {
  actions: IAction[];
  body: string;
  callbackId: string;
  fallbackBody: string;
  title: string;
}): ISlackClientChatMessage {

  const newActions: AttachmentAction[] = [];

  _.forEach(actions, (action) => {
    newActions.push(createAction(action));
  });

  return {
    text: title,
    attachments: [
      {
        text: body,
        fallback: fallbackBody,
        callback_id: callbackId,
        color: COLOUR,
        actions: newActions,
      }],
  };
}

export const FILE_UPLOADING = ({ filename }: {
  filename: string;
}): ISlackClientChatMessage => ({
  text: `"${filename}" is uploading to STEMN`,
});

export const FILE_UPLOADED = ({ filename, url }: {
  filename: string;
  url: string;
}): ISlackClientChatMessage => ({
  text: `"${filename}" has been uploaded to ${url}`,
});

export const WELCOME_MESSAGE = ({ callbackId }: {
  callbackId: string;
}): ISlackClientChatMessage => createMessage({
  actions: [{
    name: 'Setup',
    id: 'setup',
  }],
  body: 'Setup your Stemn Project with this workspace',
  callbackId,
  fallbackBody: 'You have no projects to sync with the workspace',
  title: `Hello! I'm the STEMN bot`,
});

export const SUCCESSFUL_FOLDER_SETUP = ({ project, folder, channel }: {
  project: string;
  folder: string;
  channel: string;
}): ISlackClientChatMessage => ({
  text: `Files uploaded to ${channel} will be uploaded to your ${project} project and stored in ${folder}`,
});

export const ERROR_RESPONSE = (): ISlackClientChatMessage => ({
  text: 'An Error has occurred',
});
