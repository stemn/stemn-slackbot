import { Dialog, WebClient } from '@slack/client';

interface MethodArguments {
  client: WebClient;
  triggerId: string;
  dialog: Dialog;
}

export async function openDialog ({
  client,
  triggerId,
  dialog,
}: MethodArguments): Promise<any> {

  return client.dialog.open({
    trigger_id: triggerId,
    dialog,
  });
}
