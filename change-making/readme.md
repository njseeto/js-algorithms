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
