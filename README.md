
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
  <a href="https://codecov.io/gh/stemn/stemn-slackbot">
    <img src="https://codecov.io/gh/stemn/stemn-slackbot/branch/master/graph/badge.svg" alt="CodeCov Coverage">
  </a>
  <a href="https://snyk.io/test/github/stemn/stemn-slackbot?targetFile=package.json">
    <img src="https://snyk.io/test/github/stemn/stemn-slackbot/badge.svg?targetFile=package.json" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/stemn/stemn-slackbot?targetFile=package.json" style="max-width:100%;">
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

### Setting up the Bot

#### Required Scopes


## How To Use

```bash
# Clone this repository
$ git clone https://github.com/stemn/stemn-slackbot

# Go into the repository
$ cd stemn-slackbot

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

## Related

* [Stemn-Frontend](https://github.com/stemn/stemn-frontend) - The STEMN Website
* [Stemn-Desktop-App](https://github.com/stemn/stemn-desktop) - The STEMN Desktop App
* [STEMN-Pipeline-Containers](https://github.com/stemn/stemn-pipeline-containers) - STEMN's Pipeline Containers

---
