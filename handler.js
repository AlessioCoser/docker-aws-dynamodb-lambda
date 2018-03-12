'use strict'

module.exports.api = (event, context) => {
  let response = {
    statusCode: 200,
    body: '{"response": "ok"}'
  }

  return context.succeed(response)
}
