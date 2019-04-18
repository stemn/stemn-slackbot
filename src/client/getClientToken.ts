
// TODO: Implement once api becomes available...
export async function getClientToken ({ teamId }: {
  teamId: string;
}): Promise<string> {
  return process.env.SLACKBOT_TOKEN || '';
}
