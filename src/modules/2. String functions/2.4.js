'use strict'

const romanToNumber = (romanNumber) => {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  return romanNumber
    .split('')
    .map(element => romanNumbers[element])
    .reduce((accumulator, currentValue, index, arr) => (index >= arr.indexOf(Math.max(...arr))) ? accumulator + currentValue : accumulator - currentValue, 0)
}

export default romanToNumber
