'use strict'

let singletonInstance = null
class Singleton {
  constructor (name) {
    if (!singletonInstance) {
      singletonInstance = this
    }
    this.name = name
    return singletonInstance
  }
}

export default Singleton
