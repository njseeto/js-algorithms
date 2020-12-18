const isPrime = require('../primality')

test('9 should return false', () => {
  expect(isPrime(9)).toBeFalsy()
})

test('7 should return true', () => {
  expect(isPrime(7)).toBeTruthy()
})
