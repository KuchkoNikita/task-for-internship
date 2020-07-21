'use strict'

// eslint-disable-next-line no-extend-native
export default String.prototype.customUpperCase = function () {
  const result = this
    .split('')
    .map(element => {
      if (element.charCodeAt() >= 97 && element.charCodeAt() <= 122) {
        return element.charCodeAt() - 32
      } else {
        return element.charCodeAt()
      }
    })
  return String.fromCharCode(...result)
}
