'use strict'

const pattern = (amount) => {
  const arr = []
  const rezult = []

  for (let i = 0; i < amount; i++) {
    arr.push(i + 1)
  }

  for (let i = 0; i < amount; i++) {
    arr.push(...arr.splice(0, 1))
    rezult[i] = arr.slice()
  }

  return rezult
}

export default pattern
