'use strict'

const pattern = (amount) => {
  let arr = new Array(amount).fill('')
  arr = arr.map((element, index) => {
    return index + 1
  })
  return arr.map(() => {
    arr.push(...arr.splice(0, 1))
    return arr.slice()
  })
}

export default pattern
