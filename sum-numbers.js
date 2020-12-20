// Write an algorithm that takes an array of numbers and calculates the sum of those numbers
// Define the time complexity and identify the lowest possible Time Complexity for this problem

// Time Complexity: O(n) - Linear
const sumNumbers = (numbers) => {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
			sum += numbers[i]
	}
	return sum
}

// Time Complexity: O(n) - Linear
const sumNumbersReduce = (numbers) => {
	return numbers.reduce(
		(accumulator, currentNum) => accumulator + currentNum
		)
}

// Due to not knowing the length of the array, Linear Time Complexity is the best solution.

module.exports = { 
	sumNumbers,
	sumNumbersReduce
}
