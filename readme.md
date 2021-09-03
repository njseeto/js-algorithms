My JavaScript algorithms learnings.

---
## What is in this repo?

This repo provides information on common algorithms, solutions, their time and space complexity. These algorithms are grouped together as below:

### Math Algorithms
- Calculate the sum of a number up to that number
- Primality
- Fibonacci
- Find the smallest number in an array
- Find the even and odd numbers
- Calculate the sum of an array
- Check is a number is a power of two
- Factorial Algorithm

### Recursion and Dynamic Programming
- Fibonacci (with Recursion)
- Fibonacci (with Recursion and Memoization ie: dynamic programming)

### Search Algorithms
- Linear Search; finds an the index of an element in an array in either an unordered or an ordered list
- Binary Search; finds an element in an ordered list

### Sorting Algorithms
- Bubble Sort; sorts an array by comparing 2 elements. Goes through the entire array multiple times until all pairs are compared and sorted.
- Quicksort; divide and conquers an array. Uses a pivot element to split the array into two sub-arrays and sorts these sub-arrays recursively.
- Merge sort; divides an array into multiple smaller arrays, consisting of no more than two elements. Sorts the smaller arrays and merges them back in order.

---
## Tests
Each algorithm group will have tests:
- `math-algorithms.test.js`
- `search-algorithms.test.js`
- `sorting-algorithms.test.js`

To run the tests:
- Install node dependencies `npm i`
- Run tests `npm run test`
