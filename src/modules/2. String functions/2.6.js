'use strict'

const replaceWithAlphPositions = (text) => {
  return text
    .replace(/\s+|\W+|\d+|[_!&,.]+/g, '')
    .toLowerCase()
    .split('')
    .map(letter => letter.charCodeAt() - 96)
    .join(' ')
}

export default replaceWithAlphPositions
