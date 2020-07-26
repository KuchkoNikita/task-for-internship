'use strict'

const countDuplicates = (text) => {
  return Object.values(
    text
      .split('')
      .reduce((acc, element) => {
        const letter = element.toLowerCase()
        acc[letter] = acc[letter] || 0
        acc[letter] += 1
        return acc
      }, {})
  ).filter(arrayElement => arrayElement > 1).length
}

export default countDuplicates
