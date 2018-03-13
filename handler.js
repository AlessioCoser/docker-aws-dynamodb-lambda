'use strict'

const UserRepository = require('./lib/user-repository')
const responses = require('./lib/responses')

function getEmailFrom (pathParameters) {
  return decodeURIComponent(pathParameters.email)
}

module.exports.api = (event, context) => {
  let email = getEmailFrom(event.pathParameters)

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
