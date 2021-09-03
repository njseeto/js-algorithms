const mergeSort = require('../merge-sort')

let arr = [3, 12, 8, 54, 32, 11]
let sortedArr = [3, 8, 11, 12, 32, 54]

describe('Merge sort', () => {
  test('sorts array in ascending order', () => {
    expect(mergeSort(arr)).toEqual(sortedArr)
  })
})
