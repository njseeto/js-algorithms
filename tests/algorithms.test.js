const func = require('../sum-numbers')
const isPrime = require('../primality')
const fibonacci = require('../fibonacci')
const getMin = require('../smallest-value')
const isEven = require('../even-odd')
const sumUp = require('../sum-up')
const isPowerOfTwo = require('../is-power-of-two')

describe('Takes an input and sums up all numbers including input', () => {
  test('3 should equal 6', () => {
    expect(sumUp(3)).toBe(6)
  })

  test('4 should equal 10', () => {
    expect(sumUp(4)).toBe(10)
  })
})

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

describe('Find the even and odd numbers', () => {
  test('returns true for 8', () => {
    expect(isEven(8)).toBeTruthy()
  })
  
  test('returns false for 3', () => {
  expect(isEven(3)).toBeFalsy()
  })
})

describe('Power of two', () => {
  test('returns true for 8', () => {
    expect(isPowerOfTwo(32)).toBeTruthy()
  })
  
  test('returns false for 20', () => {
  expect(isPowerOfTwo(20)).toBeFalsy()
  })
  
  test('returns true for 1125899906842624', () => {
  expect(isPowerOfTwo(1125899906842624)).toBeTruthy()
  })
})
