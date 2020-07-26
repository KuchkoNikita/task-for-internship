'use strict'

const pattern = (n) => {
  return Array
    .from({ length: n }, (_, index) => index + 1)
    .reduce((acc, value, index, arr) => {
      arr.push(...arr.splice(0, 1))
      acc[index] = arr.slice()
      return acc
    }, [])
}

export default pattern
