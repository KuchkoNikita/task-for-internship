'use strict'

// 2.1. Машиночитаемые имена [очень просто]

const toMachineName = (name, separator) => {
  return name
    .replace(/^[1-9]\s|[,.]/, '')
    .replace(/ +/g, `${separator}`)
    .trim().toLowerCase()
}

export default toMachineName
