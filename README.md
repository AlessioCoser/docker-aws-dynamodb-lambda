# AWS Lambda with DynamoDB

## Requirements

- Docker

## Setup

### Start local stack
```
docker-compose up -d
```

### Connect and setup

1. connect into local environment
```
docker-compose exec lambda bash
```

2. Install dependences
```
npm install
```

2. Start application
```
npm start
```

### Stop local stack
```
docker-compose down
```
