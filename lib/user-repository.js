'use strict'
const AWS = require('aws-sdk')
const Configuration = require('./configuration')

class UserRepository {
  constructor (configuration = new Configuration(), awsClient) {
    this.configuration = configuration
    this.awsClient = awsClient || new AWS.DynamoDB.DocumentClient(configuration.dynamoDb());
  }

  get (email) {
    var params = {
      TableName: this.configuration.get('DB_TABLE'),
      Key: { 'email': email.toLowerCase() }
    }

    return new Promise((resolve, reject) => {
      this.awsClient.get(params, function (error, data) {
        if (error) {
          console.log('FATAL error: ', error)
          reject('FATAL_ERROR')
        } else {
          resolve(data.Item)
        }
      })
    })
  }
}

module.exports = UserRepository
