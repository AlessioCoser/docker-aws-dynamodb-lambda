'use strict'

const fatalError = { statusCode: 500, body: null }
const notFound = {statusCode: 404, body: null}
const badRequest = {statusCode: 400, body: null}

function success (item) {
  return { statusCode: 200, body: JSON.stringify(item) }
}

module.exports = {
  fatalError,
  notFound,
  badRequest,
  success
}
