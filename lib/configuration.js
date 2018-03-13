'use strict'

class Configuration {
  get (property) {
    return process.env[property]
  }

  dynamoDb () {
    if (!this.get('DYNAMO_LOCAL_ENDPOINT')) {
      return {}
    }

    return {
      accessKeyId: this.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.get('AWS_SECRET_ACCESS_KEY'),
      region: this.get('AWS_REGION'),
      endpoint: this.get('DYNAMO_LOCAL_ENDPOINT')
    }
  }
}

module.exports = Configuration
