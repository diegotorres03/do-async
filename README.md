# do-async
Javascript ES6 implementation of async functionallity trouth generators

This is not a library or any particular repository, is more a tougth about one possible use of Javascript ES6 generators.

Keep in mind this will work just for Promises.

## Code Example
```js
const doAsync = require('./do-async')

doAsync(function* () {
  try {
    let x = yield promiseFunction(3)
    console.log(`x = ${x}`)
    x = yield promiseFunction(4)
    console.log(`x = ${x}`)
    x = yield promiseFunction(5)
    console.log(`x = ${x}`)
  } catch (err) {
    console.error(err)
  }
})

```

PromiseFunction could be anything that returns a promise.

```js
/**
 * this could be anything that returns a promise
 */
function promiseFunction(data) {
  return new Promise((resolve, reject) => {
    if (data) resolve(data)
    else reject(new Error('no data'))
  })
}

```

## Motivation

I created to simplify the promises chain without including complex libraries, it's just a simple handy function that allow me to write cleaner code.


## License