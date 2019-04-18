import { SLACK_TEAM_ID, SLACKBOT_TOKEN } from '../../test/config';
import { getClientToken } from './getClientToken';

describe('client - getClientToken', () => {

  it('should get token', async () => {

    const token = await getClientToken({
      teamId: SLACK_TEAM_ID,
    });

    expect(token).toBe(SLACKBOT_TOKEN);

  });
});
