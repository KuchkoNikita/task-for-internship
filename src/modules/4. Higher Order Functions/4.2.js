'use strict'

const zipWith = (fn, a0, a1) => {
  return (a0.length < a1.length ? a0 : a1).map((element, index) => {
    return fn(a0[index], a1[index])
  })
}

export default zipWith
