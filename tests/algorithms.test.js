const func = require('../sum-numbers')
const isPrime = require('../primality')
const fibonacci = require('../fibonacci')
const getMin = require('../smallest-value')
const isEven = require('../even-odd')

describe('Sums all numbers in an array', () => {
  test('adds 1 + 3 + 10 to equal 14', () => {
    expect(func.sumNumbers([1, 3, 10])).toBe(14)
  })

  test('adds 1 + 2 + 3 + 4 + 5 to equal 15', () => {
    expect(func.sumNumbersReduce([1, 2, 3, 4, 5])).toBe(15)
  })
})

describe('Fibonacci algorithm', () => {
  test('The 4th element should equal 5', () => {
    expect(fibonacci(4)).toBe(5)
  })

  test('The 5th element should equal 8', () => {
    expect(fibonacci(5)).toBe(8)
  })
})

describe('Primality Test', () => {
  test('9 should return false', () => {
    expect(isPrime(9)).toBeFalsy()
  })

  test('7 should return true', () => {
    expect(isPrime(7)).toBeTruthy()
  })
})

describe('Find the smallest value', () => {
  test('returns 2', () => {
    expect(getMin([10, 8, 4, 6, 2])).toBe (2)
  })
})
