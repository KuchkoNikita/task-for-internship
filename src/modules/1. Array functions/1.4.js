'use strict'

const pattern = (amount) => {
  return Array
    .from({ length: amount }, (_, index) => index + 1)
    .reduce((acc, value, index, selfArray) => {
      return acc.concat([
        selfArray
          .slice(index, amount)
          .concat(selfArray.slice(0, index))
      ])
    }, [])
}

export default pattern
