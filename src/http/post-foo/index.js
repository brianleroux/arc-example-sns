let arc = require('@architect/functions')
let url = arc.http.helpers.url

exports.handler = async function http(req) {
  await arc.events.publish({
    name: 'foo',
    payload: {one: 1}
  })
  return {
    headers: {
      location: url(`/`)
    },
    statusCode: 302
  }
}
