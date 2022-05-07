// Time complexity = O(n * W)
// W is the maxWeight; we depend on both the max weight and items length

const knapsackRecursive = (items, maxWeight, itemIndex, memo) => {
  // console.log('Running')
  
  // add memoization
  // if there is an item already stored in memory, return it
  if (memo[maxWeight][itemIndex]) {
    return memo[maxWeight][itemIndex]
  }

  // base case
  if(maxWeight === 0 || itemIndex < 0){
    return { items: [], value: 0, weight: 0 }
  }
  
  // check if weight is larger than max weight
  if(items[itemIndex].weight > maxWeight){
    return knapsackRecursive(items, maxWeight, itemIndex - 1, memo)
  }

  // if we add the item to the sack and adjust weight
  const sackWithItem = knapsackRecursive(
    items,
    maxWeight - items[itemIndex].weight,
    itemIndex - 1,
    memo
    )
  
  // if we do not add the item to the sack
  const sackWithoutItem = knapsackRecursive(
    items,
    maxWeight,
    itemIndex - 1,
    memo
  )

  // if we add the value from the sack with item
  const valueWithItem = sackWithItem.value + items[itemIndex].value

  // if we add value from the sack without item
  const valueWithoutItem = sackWithoutItem.value

  let resultSack;

  if(valueWithItem > valueWithoutItem){
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight
    }
    resultSack = updatedSack
  } else {
    resultSack = sackWithoutItem
  }

  memo[maxWeight][itemIndex] = resultSack

  return resultSack
}

function knapsackMemoize(items, maxWeight, itemIndex){
  /* ------------------------------------------------------------------------
  Array() creates a new array object:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array

  The memoizDataWrong variable creates an array that has 9 slots, each slot is
  filled with an undefined value. The issue with this it does not create a new
  array for each slot. Instead it creates one array, and copies the `Array(items.length)` 
  array object into the 9 slots of the `Array(maxWeight + 1)` object. This is open to bugs as 
  the `Array(items.length)` array has the same object reference and hence, we will be interacting
  with the same object in memory, ie:
  [ [sameObj], [sameObj], [sameObj], [sameObj], [sameObj] ]
  ------------------------------------------------------------------------ */

  const memoizeDataWrong = Array(maxWeight + 1).fill(Array(items.length).fill(undefined))

  /* ------------------------------------------------------------------------
  The memoizeData array creates a new array in each slot of the external array
  therefore, each array item has it's own object reference, ie:
  [ [obj1], [obj2], [obj3], [obj4], [obj5] ]

  Array.from() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  ------------------------------------------------------------------------ */
  const memoizeData = Array.from(Array(maxWeight + 1), () => 
    Array(items.length).fill(undefined)
  )
  
  return knapsackRecursive(items, maxWeight, itemIndex, memoizeData)
}

module.exports = { knapsackMemoize, knapsackRecursive }