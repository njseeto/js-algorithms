# Linear Search
Linear search is a simple way to find an item in a list.
It looks at all items in a list until it finds the item it is looking for.
It works on both unordered and ordered lists.

## Complexity
**Time Complexity:** `O(n)` since in the worst case we're checking each element once.

**Space Complexity:** `O(1)` since no new 'permanent' value is created during the iteration.

### Summary
| Best     | Average   | Worst   | Memory    | Stable    |
| :------: | :-------: | :-----: | :-------: | :-------: |
| O(1)     | O(n)      | O(n)    | O(1)      | Yes       |

> A rule of thumb is that if we have nested loops we are usually dealing with `O(n^2)` (quadratic time), unless we are doing things such as halving the input, to reduce the input.