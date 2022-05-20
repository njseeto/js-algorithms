const changeMakingGreedy = require('../change-making-greedy')

let availableCoins = [ 100, 50, 20, 10, 5, 2, 1 ]

describe('Change Making Greedy solution', () => {
  let targetValue = 129
  let expectedOutput = {
    selectedCoins: {
      1: 0,
      2: 2,
      5: 1,
      10: 0,
      20: 1,
      50: 0,
      100: 1
    },
    numberOfCoins: 5
  }

  it('returns the correct change with least amount of coins', () => {
    expect(changeMakingGreedy(availableCoins, targetValue)).toEqual(expectedOutput)
  })
})

describe('Change Making Greedy solution', () => {
  let targetValue = 66
  let expectedOutput = {
    selectedCoins: {
      1: 1,
      2: 0,
      5: 1,
      10: 1,
      20: 0,
      50: 1,
      100: 0
    },
    numberOfCoins: 4
  }

  it('returns the correct change with least amount of coins', () => {
    expect(changeMakingGreedy(availableCoins, targetValue)).toEqual(expectedOutput)
  })
})
