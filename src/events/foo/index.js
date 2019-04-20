let arc = require('@architect/functions')

exports.handler = arc.events.subscribe(async record => {
  console.log('called fn', record)
  await something()
})

function something() {
  console.log('ran something')
  return Promise.resolve('ok')
}
