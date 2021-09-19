# Merge Sort
A divide and conquer algorithm
Here, we split the array into smaller elements consisting of no more than two elements. The splitting is always done in the middle of the array. We then sort the elements in those smaller arrays and merge them back together.

## Complexity
**Time Complexity:** `O(n * log n)` since the algorithms are being divided and processed independently.
**Space Complexity:** `O(n)` since nested function calls with new values are being created.

### Summary
| Best            | Average        | Worst        | Memory    | Stable    |
| :-------------: | :------------: | :----------: | :-------: | :-------: |
| O(n * log n)    | O(n * log n)   | O(n * log n) | O(n)      | Yes       |

This algorithm performs the same regardless of the array it is given.

> Any algorithm that repeatedly divides a set of data in half and then processes those halves independently with a sub algorithm that has a time complexity of O(n), will have an overall time complexity of O(n * log n)