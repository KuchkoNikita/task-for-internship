'use strict'

export class SingletonES6 {
  constructor (name) {
    if (typeof SingletonES6.instance === 'object') {
      return SingletonES6.instance
    }
    this.name = name
    SingletonES6.instance = this
    return this
  }
}

export const SingletonES5 = (function () {
  let name
  let instance

  const getName = function () {
    return name
  }

  const setName = function (str) {
    name = str
  }

  const createInstance = function () {
    return {
      getName: getName,
      setName: setName
    }
  }

  return {
    getInstance: function () {
      return instance || (instance = createInstance())
    }
  }
})()
