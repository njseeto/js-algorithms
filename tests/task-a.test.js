const func = require('../task-1')

test('adds 1 + 3 + 10 to equal 14', () => {
  expect(func.sumNumbers([1, 3 ,10])).toBe(14)
})

test('adds 1 + 2 + 3 + 4 + 5 to equal 15', () => {
  expect(func.sumNumbersReduce([1, 2, 3, 4, 5])).toBe(15)
})
