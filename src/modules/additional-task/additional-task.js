'use strict'

const createArray = (amountElements, initialValue = 0, step = 1) => {
  return new Array(amountElements)
    .fill(0)
    .reduce((newArray, currentValue, index) => {
      if (index !== 0) {
        newArray.push(newArray[index - 1] + ((typeof step === 'function') ? step() : step))
      } else {
        newArray.push(initialValue)
      }
      return newArray
    }, [])
}
export default createArray
