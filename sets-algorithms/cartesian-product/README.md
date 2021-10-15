# Cartesian Product
Also called 'cross join' or 'unrestricted join'.

The Cartesian product between two sets is the set of all possible ordered pairs with first element from the first set and second element from the second set.

```
[A, B] // set A
[1, 2] // set B

[ [A,1], [A,2], [B,1], [B,2] ] // result
```


## Complexity
**Time Complexity:** `O(n^x)` where `n` is the length of the longest array, and `x` is the number of sets.

**Space Complexity:** `O(n^x)` since we create one new array for every execution step.

### Summary

| Best     | Average    | Worst      | Memory    |
| :------: | :--------: | :--------: | :-------: |
| O(n * m) | O(n * m)   | O(n^x)     | O(n^x)    |

> Even though we have a nested loop, we operate on  a number of arrays rather than just one many times.
