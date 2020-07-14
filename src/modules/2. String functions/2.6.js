'use strict'

const replaceWithAlphPositions = (text) => {
  const rezult = text
    .replace(/\s+|\W+|\d+|[_!&,.]+/g, '')
    .toLowerCase()
    .split('')
    .map(letter => letter.charCodeAt() - 96)
    .join(' ')
  return rezult
}

export default replaceWithAlphPositions
