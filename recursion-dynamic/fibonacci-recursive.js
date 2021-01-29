const fib = (n, memo) => { // a new storage, memo, is generated each time the fib function is called.
  let result
  // this checks if we already have a result stored, if so, we skip the function call.
  if(memo[n]) return memo[n]
  if(n === 0 || n === 1){
    result = 1
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo)
  }
  console.log(result)
  memo[n] = result // all nested calls recieve this same storage object
  console.log(memo) // will return something similar to { '0': 1, '1': 1, '2': 2, '3': 3, '4': 5, '5': 8 }
  return result
}
// Time complexity: Linear time, O(n)

module.exports = fib
