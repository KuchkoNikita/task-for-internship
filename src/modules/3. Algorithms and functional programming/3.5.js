'use strict'

const reduce = (arr, callback, initialValue) => {
  arr.forEach(element => {
    initialValue = callback(initialValue, element)
  })

  return initialValue
}

export default reduce
