## Knapsack Problem

You have a list of items where every item has a value and weight.
You also have a bag the holds a maximum weight of X.

Write a program that maximises the value of items in the bag.
Make sure you do not exceed the maximum weight.

Test case:

```
items = [
    { id: 'a', value: 3, weight: 3 },
    { id: 'b', value: 6, weight: 8 },
    { id: 'c', value: 10, weight: 3 }
]

maxWeight = 8

bag = [ 'a', 'c' ] //solution
```
-------

### Verify the problem
- Verify inputs: Can we use the items multiple times?
  - Here let's assume we can not have multiple items

### Derive first (verbal) solution
We could derive all possible combinations (without repetitions) and find the one with the highest value and fitting weight.
Note: Permutations first come to mind, however, it is not the correct approach as permutations only worry about the order of *all items*. Try running the `permutationsWithoutReps` method with the items and you will see the function finds all possible orders using all items.

### Re-thinking the solution
Evaluate all the possible cases / solutions.
We can illustrate the possible cases using the following decision tree.

![knapsack](knapsack.png)

