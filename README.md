
<h1 align="center">
  <br>
  <a href="https://www.stemn.com/"><img src="docs/astronaut.svg" alt="STEMN Logo" width="120"></a>
  <br>
  Slackbot
  <br>
</h1>

<p align="center">
  <a href="https://travis-ci.org/stemn/stemn-slackbot.svg?branch=master">
    <img src="https://travis-ci.org/stemn/stemn-slackbot.svg?branch=master"
         alt="Travis Build">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#setup-slack">Setup Slack</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

## Key Features

*

## Requirements
* Docker-compose
* A method to proxy webhooks from Slack to your local development machine
  - In the docker-compose file we use WebhookRelay to achieve this, nGrok also works just fine
* Slack App for deployment
* Slack App for testing (Optional)

## Setup Slack

*

## How To Use

```bash
# Clone this repository
$ git clone https://github.com/stemn/stemn-slackbot

# Go into the repository
$ cd stemn-slackbot

# Install dependencies
$ docker run -v $PWD:/app -w /app node:11-alpine yarn

# Create a .env file AND populate the environment variables
# Refer to the Setup Slack section for details
$ echo "
  # Slackbot secrets
  SLACK_SIGNING_SECRET=
  SLACK_BOT_USER_TOKEN=

  # Testing Slackbot
  SLACK_TEST_USER_TOKEN=
  SLACK_PRIVATE_CHANNEL_1=
  SLACK_PRIVATE_CHANNEL_2=
  SLACK_PUBLIC_CHANNEL_1=
  SLACK_PUBLIC_CHANNEL_2=

  # Webhook relay
  WEBHOOK_RELAY_KEY=
  WEBHOOK_RELAY_SECRET=
  " >> .env

# Run stack
$ yarn docker:start
```

## Related

* [Stemn-Frontend](https://github.com/stemn/stemn-frontend) - The STEMN Website
* [Stemn-Desktop-App](https://github.com/stemn/stemn-desktop) - The STEMN Desktop App
* [STEMN-Pipeline-Containers](https://github.com/stemn/stemn-pipeline-containers) - STEMN's Pipeline Containers

---
