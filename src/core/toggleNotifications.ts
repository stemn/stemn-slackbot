
export async function toggleAllNotifications (payload: any, respond: any): Promise<any> {
  // `payload` is an object that describes the interaction
  console.log(`The user ${payload.user.name} in team ${payload.team.domain} pressed a button`);

  const message = {
    text: 'Thank you for agreeing to the team\'s policy.',
  };

  respond(message);

  // Before the work completes, return a message object that is the same as the original but with
  // the interactive elements removed.
  const reply = payload.original_message;
  delete reply.attachments[0].actions;
  return reply;
}
