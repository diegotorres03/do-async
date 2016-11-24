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

A short description of the motivation behind the creation and maintenance of the project. This should explain **why** the project exists.

## Installation

Provide code examples and explanations of how to get the project.

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

Describe and show how to run the tests with code examples.

## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)