const factorial = (n) => {
	let result = 1
	for(let i = 1; i < n; i++){
		result += result*i
	}
	return result
}

module.exports = factorial

// TIme Complexity: O(n),  Linear Time
