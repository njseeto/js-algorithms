// Time Complexity (Greedy Solution): O(n) - Linear Time
// We have a for loop that goes through all the coins, n is the length of our coins array

const changeMakingGreedy = (availableCoins, amount) => {
  let remainingAmount = amount

  let coinCounter = {
    selectedCoins: {},
    numberOfCoins: 0
  }

  for ( const coin of availableCoins) {
    const count = Math.floor(remainingAmount / coin)
    coinCounter.selectedCoins[coin] = count
    coinCounter.numberOfCoins += count
    remainingAmount = remainingAmount - coin * count
  }

  return coinCounter
}

module.exports = changeMakingGreedy
