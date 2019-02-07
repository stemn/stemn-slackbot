import { MessageAttachment } from '@slack/client';
import * as _ from 'lodash';

const COLOUR = '#3AA3E3';

export interface ISlackClientChatMessage {
  comment: string;
  attachments?: MessageAttachment[];
}

interface ISlackClientMessageAction {
  name: string;
  text: string;
  type: string;
  value: string;
  confirm: {
    title: string;
    text: string;
    ok_text: string;
    dismiss_text: string;
  };
}

interface IAction {
  name: string;
  id: string;
}

const createAction = ({ name, id }: IAction): ISlackClientMessageAction => ({
  name,
  text: name,
  type: 'button',
  value: id,
  confirm: {
    title: 'Are you sure?',
    text: `You want to sync '${name}' with this workspace`,
    ok_text: 'Yes',
    dismiss_text: 'No',
  },
});

function createMessage ({ title, body, fallbackBody, actions, callbackId }: {
  actions: IAction[];
  body: string;
  callbackId: string;
  fallbackBody: string;
  title: string;
}): ISlackClientChatMessage {

  const newActions: ISlackClientMessageAction[] = [];

  _.forEach(actions, (action) => {
    newActions.push(createAction(action));
  });

  return {
    comment: title,
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

export const FILE_UPLOADING = (filename: string): ISlackClientChatMessage => ({
  comment: `"${filename}" is uploading to STEMN`,
});

export const FILE_UPLOADED = (filename: string, url: string): ISlackClientChatMessage => ({
  comment: `"${filename}" has been uploaded to ${url}`,
});

export const CHOOSE_FOLDER = ({ folders, callbackId }: {
  folders: IAction[];
  callbackId: string;
}): ISlackClientChatMessage => createMessage({
  actions: folders,
  body: 'Choose one of the folders below to sync',
  callbackId,
  fallbackBody: 'You do not have any folders to sync',
  title: 'Choose a folder to Sync',
});

export const WELCOME_MESSAGE = ({ projects, callbackId }: {
  projects: IAction[];
  callbackId: string;
}): ISlackClientChatMessage => createMessage({
  actions: projects,
  body: 'Choose a project to sync with this slack workspace',
  callbackId,
  fallbackBody: 'You have no projects to sync with the workspace',
  title: `Hello! I'm the STEMN bot`,
});
