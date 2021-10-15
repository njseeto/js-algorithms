# Permutations
Also called an “arrangement number” or “order”, is a rearrangement of the elements of an ordered list.Permutations can be with or without repetition.

Without repetition, we want to produce all possible permutations without repeating a value. Take for example, a to-do list.

To do:

- Walk the dog
- Cook dinner
- Watch a movie

These activities can be done in any order and without repetition
```
['Walk the dog', 'Cook dinner', 'Watch a movie']

['Cook dinner', 'Watch a movie', 'Walk the dog']

['Watch a movie', 'Walk the dog', 'Cook dinner']
// .... etc
```

## Complexity
**Time Complexity:** `O(n!)` Factorial time complexity (this is very very slow)

____________

Permutations with repetition, we want to produce all possible permutations including repeating values.

Take for example, a lock that has 3 digits `[1, 5, 9]`

Lock combinations with repetitions

```
[1, 1, 1]

[1, 5, 5]

[9, 5, 9]

// ... etc
```

## Complexity
**Time Complexity:** `O(n^r)`
> Where `n` is the number of options in the array and `r` is the wanted length. This is also very slow.