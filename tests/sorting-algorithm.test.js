const bubbleSort = require('../sorting-algorithms/bubble-sort')

let arr = [3, 12, 8, 54, 32, 11]

describe('Bubble sort', () => {
  test('sorts the array in ascending order', () => {
    expect(bubbleSort(arr)).toEqual([3, 8, 11, 12, 32, 54])
  })
})
