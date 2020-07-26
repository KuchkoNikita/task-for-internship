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
    .reduce((acc, currentValue, index, selfArray) => (
      (index >= selfArray.indexOf(Math.max(...selfArray)))
        ? acc + currentValue
        : acc - currentValue
    ), 0)
}

export default romanToNumber
