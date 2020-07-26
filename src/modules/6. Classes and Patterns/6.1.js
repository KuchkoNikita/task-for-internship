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

export function SingletonES5 (name) {
  this.name = name
  this.instance = null
}

SingletonES5.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new SingletonES5(name)
  }
  return this.instance
}
