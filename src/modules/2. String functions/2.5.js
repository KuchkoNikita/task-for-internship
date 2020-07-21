'use strict'

const countDuplicates = (text) => {
  const myObj = {}
  let counter = 0
  text.split('').forEach((element) => {
    element = element.toLowerCase()
    if (!myObj[element]) {
      myObj[element] = 1
    } else if (myObj[element] < 2) {
      myObj[element] += 1
      counter++
    }
  })

  return counter
}

export default countDuplicates
