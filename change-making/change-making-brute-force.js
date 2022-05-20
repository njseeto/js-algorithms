// Time Complexity (Brute Force): O(n^2)

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

// BRUTE FORCE
const changeMakingBruteForce = (availableCoins, amount) => {
  const results = []

  for (var i = 0; i < availableCoins.length; i++ ) {
    results.push(changeMakingGreedy(availableCoins.slice(i), amount)) // slice returns a shallow copy removing an index everytime
  }

  // Find the array with the smallest amount of coins
  let smallestNumberOfCoins = Number.MAX_SAFE_INTEGER // largest int 
  let finalResult;

  for (const result of results){
    if (result.numberOfCoins < smallestNumberOfCoins) {
      smallestNumberOfCoins = result.numberOfCoins
      finalResult = result // if the smallestAmountOfCoins is founc, set the finalResult to the result 
    }
  }
  return finalResult
}

module.exports = { changeMakingBruteForce, changeMakingGreedy }