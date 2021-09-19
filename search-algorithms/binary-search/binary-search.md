# Binary Search

Binary search is an algortihm that takes the median and compare it to the element we are looking for, then focus on the half in which the element could be in and repeat the process.

It is also known as half-interval search or binary chop.

Binary search can only be used on sorted lists.

## Complexity
**Time Complexity:** `O(log(n))` since we split search area by two for every next iteration.

**Space Complexity:** `O(1)` since no new 'permanent' value is created during the iteration.

### Summary

| Best     | Average     | Worst        | Memory    | Stable    |
| :------: | :---------: | :----------: | :-------: | :-------: |
| O(1)     | O(log(n))   | O(log(n))    | O(1)      | Yes       |


> A good rule of thumb, if we are splitting the problem set into 2 or more with every iteration - we are dealing with O(log n) - Logarithmic Time.
