# AWS Lambda with DynamoDB in a Local Docker Stack
A Project Bootstrap for local development with AWS DynamoDb Local and AWS Lambda

## Requirements

- Docker

## Setup

**NB:** Copy the `.env.template` into a `.env` file in the main folder and fill credentials from your AWS IAM profile.

(If you don't have credentials you can insert random strings for local development)

### Use Local stack
Start
```
docker-compose up -d
```

Stop
```
docker-compose down
```

### Development Environment

1. connect into local environment
```
docker-compose exec lambda bash
```

2. Install dependences
```
$ npm install
```

3. Application
```
$ npm start
$ npm stop
```

After each code editing you can execute `npm restart` in order to have the latest version of code running
