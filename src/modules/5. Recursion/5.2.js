'use strict'

const stringify = (list, arr = []) => {
  arr.push(list.data)
  if (list.next !== null) {
    return stringify(list.next, arr)
  } else {
    arr.push(null)
    return arr
  }
}

export default stringify
