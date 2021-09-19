# Bubble Sort
This algorithm compares 2 items at a time and sorts them. 

Here, we go through the entire array multiple times until all pairs are compared and sorted.

## Complexity
**Time Complexity:** <code>O(n<sup>2</sup>)</code> since we have nested loops.

**Space Complexity:** `O(1)` since no new 'permanent' value is created during the iteration.

### Summary
| Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| O(n)            | O(n<sup>2</sup>)    | O(n<sup>2</sup>)    | O(1)      | Yes       |           |

> A rule of thumb is that if we have nested loops we are usually dealing with `O(n^2)` (quadratic time), unless we are doing things such as halving the input, to reduce the input.