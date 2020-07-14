'use strict'

const compose = (...rest) => (a) => {
  return rest.reverse().reduce((accum, item) => {
    return item(accum)
  }, a)
}

export default compose
