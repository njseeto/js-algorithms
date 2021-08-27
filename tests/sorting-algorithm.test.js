const bubbleSort = require('../sorting-algorithms/bubble-sort')
const quicksort = require('../sorting-algorithms/quicksort')
const mergeSort = require('../sorting-algorithms/merge-sort')

let arr = [3, 12, 8, 54, 32, 11]
let sortedArr = [3, 8, 11, 12, 32, 54]

describe('Bubble sort', () => {
  test('sorts the array in ascending order', () => {
    expect(bubbleSort(arr)).toEqual(sortedArr)
  })
})

describe('Quicksort', () => {
  test('sorts the array in ascending order', () => {
    expect(quicksort(arr)).toEqual(sortedArr)
  })
})

describe('Merge sort', () => {
  test('sorts array in ascending order', () => {
    expect(mergeSort(arr)).toEqual(sortedArr)
  })
})
