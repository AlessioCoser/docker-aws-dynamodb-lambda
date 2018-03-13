'use strict'

const UserRepository = require('./lib/user-repository')
const responses = require('./lib/responses')

module.exports.api = (event, context) => {
  if (!event.queryStringParameters || !event.queryStringParameters.email) {
    return context.succeed(responses.badRequest)
  }

  let email = event.queryStringParameters.email

  return new UserRepository().get(email)
  .then((item) => {
    if (!item) {
      return context.succeed(responses.notFound)
    }

    return context.succeed(responses.success(item))
  })
  .catch((err) => {
    console.error(err)
    return context.succeed(responses.fatalError)
  })
}
