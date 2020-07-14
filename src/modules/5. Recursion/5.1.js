'use strict'

const sequenceSum = (begin, end, step, sum = begin) => {
  if (begin + step <= end) {
    begin += step
    sum += begin
    return sequenceSum(begin, end, step, sum)
  }
  return sum
}

export default sequenceSum
