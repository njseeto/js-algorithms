const bubbleSort = require('../bubble-sort')

let arr = [3, 12, 8, 54, 32, 11]
let sortedArr = [3, 8, 11, 12, 32, 54]

describe('Bubble sort', () => {
  test('sorts the array in ascending order', () => {
    expect(bubbleSort(arr)).toEqual(sortedArr)
  })
})
