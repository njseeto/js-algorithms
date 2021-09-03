const binarySearch = require("../binary-search")
const recursiveBinarySearch = require("../recursive-binary-search")

let sortedArr = [1, 8, 11, 21, 33, 56, 87, 100]

describe('Binary search', () => {
  test('finds the element', () => {
    expect(binarySearch(sortedArr, 87)).toBe(6)
  })
})

describe('Recursive binary search', () => {
  test('finds the element', () => {
    expect(recursiveBinarySearch(sortedArr, 87, 0)).toBe(6)
    })
  })
