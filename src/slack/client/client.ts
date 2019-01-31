import { WebClient } from '@slack/client';
import { SLACK_BOT_USER_TOKEN } from '../../config';

export const client = new WebClient(SLACK_BOT_USER_TOKEN);
