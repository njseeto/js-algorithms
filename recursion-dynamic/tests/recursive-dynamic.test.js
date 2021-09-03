const fib = require('../fibonacci-recursive.js')

describe('Fibonacci algorithm', () => {
  test('The 4th element should equal 5', () => {
    expect(fib(4, {})).toBe(5)
  })

  test('The 5th element should equal 8', () => {
    expect(fib(5, {})).toBe(8)
  })
})
