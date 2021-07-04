const findElement = require("../search-algorithms/linear-search")

let arr = [5, -3, 10, -1, 12, 6]

describe('Finds the element in an array', () => {
  test('finds the element index', () => {
    expect(findElement(arr, 10)).toBe(2)
  })
})

describe('Does not find element in the array', () => {  
  test('shows correct message', () => {
    expect(findElement(arr, 8)).toBe('Element not found')
  })
})
