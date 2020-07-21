'use strict'

// 1.1 Усредненная сумма массивов [очень просто]

const sumAverage = (arr) => {
  const sumNumbers = arr.reduce((sum, current) => {
    const arrayResult = current.reduce((sum, number) => sum + number)
    return sum + arrayResult
  }, 0)

  return Math.floor(sumNumbers / arr.length)
}

export default sumAverage
