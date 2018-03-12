'use strict'

class Configuration {
  get (property) {
    return process.env[property]
  }

  dynamoDb () {
    return {
      accessKeyId: this.get('ACCESS_KEY_ID'),
      secretAccessKey: this.get('SECRET_ACCESS_KEY'),
      region: this.get('REGION'),
      endpoint: this.get('ENDPOINT') || null
    }
  }
}

module.exports = Configuration
