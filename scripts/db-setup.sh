#!/bin/bash

DYNAMO_ENDPOINT=$1

# configure aws sdk
mkdir -p /root/.aws
echo -e "[default]\naws_access_key_id=${AWS_ACCESS_KEY_ID}\naws_secret_access_key=${AWS_SECRET_ACCESS_KEY}" > /root/.aws/credentials
echo -e "[default]\noutput=json\nregion=${AWS_REGION}" > /root/.aws/config


aws dynamodb create-table \
  --table-name users-develop \
  --attribute-definitions AttributeName=email,AttributeType=S \
  --key-schema AttributeName=email,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
  --endpoint-url ${DYNAMO_ENDPOINT}


aws dynamodb put-item \
  --table-name users-develop \
  --item '{"email": {"S":"my@email.local"}, "name": {"S": "User With Email"}}' \
  --endpoint-url ${DYNAMO_ENDPOINT}


# aws dynamodb list-tables \
#   --endpoint-url ${DYNAMO_ENDPOINT} \
#   --region eu-west-1 \
#   --output json

# aws dynamodb get-item \
#   --table-name users-develop \
#   --key 'email=my@email.local' \
#   --endpoint-url ${DYNAMO_ENDPOINT}
