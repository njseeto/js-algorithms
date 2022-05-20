## Change Making Problem

Given we have a `Target Value` and `Available Coins`, write a function that returns the coins and the number of each coin to reach the `Target Value`. We want to use an algorithm that uses the least number of coins.

```
availableCoins = [ 100, 50, 20, 10 , 5, 2, 1 ]
targetValue = 129

targetOutput = {
  selectedCoins: {
    1: 0,
    2: 2,
    5: 1,
    10: 0,
    20; 1,
    50: 0,
    100: 1
  },
  numberOfCoins: 5
}
```

#### Verify the inputs
Are the coins ordered and "stable"?
- If they are not ordered, we might need to sort the array.
- When we say stable, we mean are should the algorithm always accept the coins in the `availableCoins` array or are the coins variable?

Is the amount specific or should we round the amount?
- If rounded we could use less coins

Here, we should assume the coins are ordered and stable, and the target amount is specific.

------------------
### Greedy Solution
The [greedy solution]('./change-making-greedy.js) uses a for loop to iterate over each coin. We check if we the coin is smaller than the amount and use this coin if we can.

*Time complexity: O(n)*

The greedy approach to this problem is Linear time, this is because the algorithm is dependant on the for loop and the number of coins in the array.

A better time complexity would be either Logarithmic time or Constant time.

There isn't really a way to do this algorithm with a time complexity of constant time as we need to analyse each coin.

To achieve logarithmic time we typically need to split the array into two smaller arrays (similar to the Binary Search), but again, here we need to look at all coins.

There is something very small that could be done and that is to skip the larger coins if the target amount is small - but this is such a tiny optimisation that we really wouldn't gain much by doing this.

If we assume the `availableCoins` array length will always be the same then we will have Constant Time, this it because the input will always be the same.
If we assume the `availableCoins` is flexible but the nature is the same that we can rely on the fact that looking at the biggest number first always gives us the best answer, we have Linear Time.
Therefore, with these assumptions, a greedy approach is all we need to solve this problem.

------------------
### A more difficult change making problem
Say we have the change making problem but we use these inputs below:

```
availableCoins = [ 8, 6, 5, 1 ]
targetValue = 11

targetOutput = {
  selectedCoins: {
    1: 0,
    5: 1,
    6: 1
  },
  numberOfCoins: 2
}
```

Verifying the inputs, we can assume the coins will be ordered and the target amount is specific, we must also assume that we do not know what coins we will be given in the `availableCoins` array.

Here a greedy solution would not work as you would get 

```
targetOutput = {
  selectedCoins: {
    1: 3,
    5: 0,
    6: 0,
    8: 1
  },
  numberOfCoins: 4
}
```

To solve this problem, we need to know all the possible combinations, and find the one with the least number of coins. This called a Brute Force approach.

A brute force approach is different to a dynamic approach because a brute force approach would iterate over an array many times, whereas a dynamic approach stores the overlapping solutions. Therefore, dynamic programming can be more efficient.

### Brute Force Solution

The [brute force solution]('./change-making-brute-force.js) iterates over the `availableCoins` array, and removes the first element after each full iteration (`slice(i)`).

In terms of Time Complexity, we are using the Greedy algorithm which has a time complexity of O(n) which is itself within a for loop, which also has a time complexity of O(n):

```
  for (var i = 0; i < availableCoins.length; i++ ) {
    results.push(changeMakingGreedy(availableCoins.slice(i), amount))
  }
```
Then we iterate over the `results` array which itself has a time complexity of O(n)

Therefore we have, O(n * n) + O(n), which becomes O(n^2) as we focus on the fastest growing curve.

*Time Complexity: O(n^2)*

We have a higher time complexity, as we have a more complex problem - being we don't know the `availableCoins` this time.