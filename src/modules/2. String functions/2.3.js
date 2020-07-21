'use strict'

const alphabetized = (text) => {
  return text
    .replace(/\s+|\W+|\d+|[_!&,.]+/g, '')
    .split('')
    .sort(([a], [b]) => {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1
      } else {
        return 1
      }
    })
    .join('')
}

export default alphabetized
