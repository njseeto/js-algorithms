const getMin = (n) => {
  let currentMin = n[0]
  for(const number of n){
    if(number < currentMin){
      currentMin = number
    }
  }
  return currentMin
}

module.exports = getMin

// Time complexity: O(n), Linear.
// Best case: Linear is the best case.
// Worst case: Linear is the worst case.

const findMin = (n) => {
  return Math.min(...n)
}