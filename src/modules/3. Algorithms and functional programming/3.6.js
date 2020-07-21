'use strict'

const compose = (...rest) => (a) => {
  return rest.reduceRight((accum, item) => {
    return item(accum)
  }, a)
}

export default compose
