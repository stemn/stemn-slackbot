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

export const FILE_UPLOADING = (filename: string): ISlackClientChatMessage => ({
  comment: `"${filename}" is uploading to STEMN`,
});

export const FILE_UPLOADED = (filename: string, url: string): ISlackClientChatMessage => ({
  comment: `"${filename}" has been uploaded to ${url}`,
});

export function WELCOME_MESSAGE ({ projects, callbackId }: {
  projects: any;
  callbackId: string;
}): ISlackClientChatMessage {

  const createAction = (name: string, id: string): ISlackClientMessageAction => ({
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

  const actions: ISlackClientMessageAction[] = [];

  _.forEach(projects, ({ name, id }) => {
    actions.push(createAction(name, id));
  });

  return {
    comment: `Hello! I'm the STEMN bot`,
    attachments: [
      {
        text: 'Choose a project to sync with this slack workspace',
        fallback: 'You have no projects to sync with the workspace',
        callback_id: callbackId,
        color: COLOUR,
        actions,
      }],
  };
}
