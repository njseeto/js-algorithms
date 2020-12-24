// return true if n is a power of two

const isPowerOfTwo = (n) => {
  if(n < 1){
    return false
  }
 let dividedNumber = n
  while(dividedNumber !== 1){
    if(dividedNumber % 2 !== 0){
      return false
    }
    dividedNumber = dividedNumber / 2
  }
  return true
}

module.exports = isPowerOfTwo

// Time complexity: O(log n), Logarithmic.

// Best case: n = 3; Linear is the best case.
// Worst case: n = 1125899906842624 (n is a large number that is a power of two), Logarithmic is the worst case.
