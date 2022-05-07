## Greedy vs Dynamic Algorithms

### Greedy
- Makes the best possible decision in every step and hope that it leads to the best overall solution
- Greedy algorithms are often simpler and as a result faster to set up and come up with, but they don't necessarily provide the best runtime and/or result
- The knapsack example solved with the [greedy approach]('./greedy-knapsack.js') shows we need to verify any greedy approaches with different inputs to ensure the behaviour of the algorithm is what we expect
- A greedy approach is a good first approach as the implementation is quicker but remember to verfy the results and be open to refine the approach and perhaps using a dynamic approach

### Dynamic
- Most likely are using memoization because we evaluate all possible solutions and find the overall best solution via comparison
- Memoization is typical here as we want to only compute solutions once rather than duplicating these computations
- Memoization might provide us with a better runtime
- 'Divide and Conquer' approach: Divide the problem into smaller, easy-to-solve subproblems

