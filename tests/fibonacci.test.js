const fibonacci = require('../fibonacci')

test('The 4th element should equal 5', () => {
  expect(fibonacci(4)).toBe(5)
})

test('The 5th element should equal 8', () => {
  expect(fibonacci(5)).toBe(8)
})
