const { changeMakingBruteForce } = require('../change-making-brute-force')
const availableCoins = [ 8, 6, 5, 1 ]

describe('Brute Force', () => {
  it('provides the correct result', () => {
    let amount = 11
    let expectedOutput = {
      selectedCoins: {
        6: 1, 
        5: 1,
        1: 0
      },
      numberOfCoins: 2
    }

    expect(changeMakingBruteForce(availableCoins, amount)).toEqual(expectedOutput)
  })
})


describe('Brute Force', () => {
  it('provides the correct result', () => {
    let amount = 2
    let expectedOutput = {
      selectedCoins: {
        8: 0,
        6: 0, 
        5: 0,
        1: 2
      },
      numberOfCoins: 2
    }

    expect(changeMakingBruteForce(availableCoins, amount)).toEqual(expectedOutput)
  })
})


describe('Brute Force', () => {
  it('provides the correct result', () => {
    let amount = 63
    let expectedOutput = {
      selectedCoins: {
        8: 7,
        6: 1, 
        5: 0,
        1: 1
      },
      numberOfCoins: 9
    }

    expect(changeMakingBruteForce(availableCoins, amount)).toEqual(expectedOutput)
  })
})