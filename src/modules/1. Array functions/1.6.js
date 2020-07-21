'use strict'

const diagonalSum = (matrix) => {
  let result = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) result += matrix[i][j]
    }
  }

  return result
}

export default diagonalSum
