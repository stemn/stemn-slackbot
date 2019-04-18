import { Dialog } from '@slack/client';

export const SETUP_DIALOG = ({ callbackId, state }: {
  callbackId: string;
  state: string;
}): Dialog => ({
  callback_id: callbackId,
  title: 'Setup your Cloud Computer',
  submit_label: 'Confirm',
  notify_on_cancel: false,
  state,
  elements: [{
    label: 'Select your project',
    name: 'project_data',
    type: 'select',
    data_source: 'external',
    },
    {
      label: 'Select a folder to sync',
      name: 'folder_data',
      type: 'select',
      data_source: 'external',
    }],
});
