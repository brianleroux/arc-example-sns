let arc = require('@architect/functions')
let url = arc.http.helpers.url

exports.handler = async function http() {
  return {
    headers: {'content-type':'text/html'},
    body: `
<form action=${url('/foo')} method=post>
  <button type=submit>send foo event</button>
</form>
    `
  }
}
