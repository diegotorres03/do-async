'use strict'


module.exports = doAsync

/**
 * This function helps to mimic the behavior of C# or ES7 async/await
 * helping to asynchronous code look synchronous without blocking
 * the event loop
 * @param {Function Generator} Function to be executed
 */
function doAsync(generator) {
  let gen = generator()
  nextCycle(gen, gen.next())

  function nextCycle(gen, current) {
    if (!current.done) {
      current.value
        .then(val => nextCycle(gen, gen.next(val)))
        .catch(err =>gen.throw(err))
    }
    else return
  }

}