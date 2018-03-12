'use strict'

const UserRepository = require('./lib/user-repository')

module.exports.api = (event, context) => {
  let userRepository = new UserRepository()

  return userRepository.get('my@email.local')
  .then((item) => {
    return context.succeed({ statusCode: 200, body: JSON.stringify(item) })
  })
  .catch((err) => {
    return context.succeed({ statusCode: 500, body: '{"error": "' + err + '"}' })
  })
}
