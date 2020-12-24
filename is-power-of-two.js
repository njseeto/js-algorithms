// return true if n is a power of two

const isPowerOfTwo = (n) => {
  if(n < 1){
    return false
  }
  return (n & (n - 1)) === 0
 }

module.exports = isPowerOfTwo

// Time complexity: O(1), Constant Time.
