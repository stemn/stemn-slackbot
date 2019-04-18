
// TODO: Implement once api becomes available...
export async function getClientToken ({ teamId }: {
  teamId: string;
}): Promise<string> {
  return process.env.SLACK_BOT_TOKEN || '';
}
