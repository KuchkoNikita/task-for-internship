'use strict'

const arithmeticSequenceSum = (a, r, n) => {
  let result = 0
  for (let i = 0; i < n; i++) {
    result = (result + a) + (i * r)
  }
  return result
}

export default arithmeticSequenceSum
