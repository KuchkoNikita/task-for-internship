'use strict'

const compose = (...rest) => (a) => {
  return rest.reduceRight((accum, item) => item(accum), a)
}

export default compose
