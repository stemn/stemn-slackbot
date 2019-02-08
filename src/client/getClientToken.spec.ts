import { getClientToken } from './getClientToken';

import {
  SLACK_BOT_TOKEN,
  SLACK_USER_ID,
} from '../../test/config';

describe('client - getClientToken', () => {

  it('should get token', async () => {

    const token = await getClientToken({
      userId: SLACK_USER_ID,
    });

    expect(token).toBe(SLACK_BOT_TOKEN);

  });
});
