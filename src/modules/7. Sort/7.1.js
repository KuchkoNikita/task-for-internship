'use strict'

const customSort = (list, sortBy) => {
  list.sort((element1, element2) => {
    if (element1[sortBy] > element2[sortBy]) {
      return -1
    } else if (element1[sortBy] < element2[sortBy]) {
      return 1
    } else {
      return 0
    }
  })
  return list
}

export default customSort
