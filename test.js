'use strict'

const doAsync = require('./do-async')


doAsync(function* () {
  try {
    let x = yield promiseFunct(3)
    console.log(`x = ${x}`)
    x = yield promiseFunct(4)
    console.log(`x = ${x}`)
    x = yield promiseFunct(5)
    console.log(`x = ${x}`)
  } catch (err) {
    console.error(err)
  }
})


/**
 * this could be anything that returns a promise
 */
function promiseFunct(data) {
  return new Promise((resolve, reject) => {
    if (data) resolve(data)
    else reject(new Error('no data'))
  })
}
