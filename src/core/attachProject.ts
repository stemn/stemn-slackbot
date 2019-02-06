
export async function attachProject (payload: any, respond: any): Promise<any> {

  console.log({ payload, respond });

  const message = {
    text: 'GG',
  };

  respond(message);

  // Before the work completes, return a message object that is the same as the original but with
  // the interactive elements removed.
  const reply = payload.original_message;
  delete reply.attachments[0].actions;
  return reply;
}
