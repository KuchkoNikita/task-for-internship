'use strict'

// 1.1 Усредненная сумма массивов [очень просто]

const sumAverage = (arr) => {
  const result = arr.reduce((sum, current) => {
    const arrayResult = current.reduce((sum, number) => {
      return sum + number
    })

    return sum + arrayResult
  }, 0)

  return Math.floor(result / arr.length)
}

export default sumAverage
