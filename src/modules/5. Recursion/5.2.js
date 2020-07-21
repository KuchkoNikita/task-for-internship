'use strict'

const stringify = (list, arr = []) => {
  arr.push(list.data)
  if (list.next) {
    return stringify(list.next, arr)
  } else {
    arr.push(list.next)
    return arr
  }
}

export default stringify
