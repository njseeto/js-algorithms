// Return the nth element of the Fibonacci sequence eg: fib(4) = 5

const fibonacci = (n) => {
	const arr = [1,1]
	for(i = 2; i < n+1; i++){
		arr.push(arr[i - 2] + arr[i - 1])
	}
	return arr[n]
}

module.exports = fibonacci

// This function yields a Linear Time Complexity and is the best solution for this problem
