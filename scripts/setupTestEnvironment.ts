/* tslint:disable:no-console ter-max-len */
import { WebClient } from '@slack/client';
import { createReadStream, writeFileSync } from 'fs';
import * as _ from 'lodash';

const OUTPUT_FILE = '.env';
const SAMPLE_FILE = __dirname + '/../test/sample_image.png';

if (process.argv.length !== 3) {
  console.log('Supply your slack token');
  console.log('');
  console.log('yarn setup:test:environment token=YOUR_TOKEN_HERE');
  process.exit(1);
}

const token = process.argv[2].replace('token=', '');

const client = new WebClient(token);

// create public and private channel
async function createChannels () {

  const validChannelName = (prefix = '') => `${prefix}-${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}_${new Date().getMilliseconds()}`;

  // Create the a public channel
  const channelName = validChannelName('PUB_TEST');
  const channel = await client.channels.create({ name: channelName });

  // Create a private group
  const groupName = validChannelName('PRIV_TEST');
  const group = await client.groups.create({ name: groupName });

  return {
    channel,
    group,
  };
}

// upload a basic file
async function uploadFile (channel: string) {
  const filename = `${channel}'s Root Test File ${new Date()}.png`;

  const fileInfo = client.files.upload({
    channels: channel,
    file: createReadStream(SAMPLE_FILE),
    filename,
    initial_comment: 'Root File for testing purposes',
  });

  return fileInfo;
}

createChannels().then(async ({ channel, group }) => {

  const channelId = _.get(channel, 'channel.id');
  const groupId = _.get(group, 'group.id');

  const publicChannelFile = await uploadFile(channelId);
  const privateChannelFile = await uploadFile(groupId);

  const data = `
  # Slackbot secrets
  SLACK_SIGNING_SECRET=

  # Testing Configuration
  SLACK_BOT_ID=
  SLACK_BOT_TOKEN=

  SLACK_USER_ID=${_.get(privateChannelFile, 'file.user')}
  SLACK_USER_TOKEN=${token}

  SLACK_PRIVATE_CHANNEL=${groupId}
  SLACK_PRIVATE_CHANNEL_FILE_ID=${_.get(privateChannelFile, 'file.id')}

  SLACK_PUBLIC_CHANNEL=${channelId}
  SLACK_PUBLIC_CHANNEL_FILE_ID=${_.get(publicChannelFile, 'file.id')}

  # Webhook relay
  WEBHOOK_RELAY_KEY=
  WEBHOOK_RELAY_SECRET=
  `;

  writeFileSync(__dirname + `/../${OUTPUT_FILE}`, data, 'utf8');

  console.log('Completed');
});
