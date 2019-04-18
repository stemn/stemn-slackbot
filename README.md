<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#requirements">Requirements</a> •
  <a href="#setup-slack">Setup Slack</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

## Key Features

* Control your [cloud computer](https://github.com/cloud-computer/cloud-computer) from Slack.

## Requirements
* Docker-compose
* A method to proxy webhooks from Slack to your local development machine
  - In the docker-compose file we use WebhookRelay to achieve this, nGrok also works just fine
* Slack App for deployment
* Slack App for testing (Optional)

## Setup Slack

### Setting up the Bot

#### Required Scopes

## How To Use

```bash
# Clone this repository
$ git clone https://github.com/cloud-computer/slackbot

# Go into the repository
$ cd slackbot

# Install dependencies
$ docker run -v $PWD:/app -w /app node:11-alpine yarn

# Run the following with your USER token to create a .env file in the root directory
# NOTE: You will still need to populate a number of fields in the .env file
# NOTE: Your user will need access to the following scopes
# * channels:write
# * groups:write
# * files:write:user
$  yarn setup:test:environment token=

# Run stack
$ yarn docker:start
```
