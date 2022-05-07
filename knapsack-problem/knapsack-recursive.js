// Time complexity = O(n ^ 2)

const knapsackRecursive = (items, maxWeight, itemIndex) => {
  // console.log('Running')

  // base case
  if(maxWeight === 0 || itemIndex < 0){
    return { items: [], value: 0, weight: 0 }
  }
  
  // check if weight is larger than max weight
  if(items[itemIndex].weight > maxWeight){
    return knapsackRecursive(items, maxWeight, itemIndex - 1)
  }

  // if we add the item to the sack and adjust weight
  const sackWithItem = knapsackRecursive(
    items,
    maxWeight - items[itemIndex].weight,
    itemIndex - 1
    )
  
  // if we do not add the item to the sack
  const sackWithoutItem = knapsackRecursive(
    items,
    maxWeight,
    itemIndex - 1
  )

  // if we add the value from the sack with item
  const valueWithItem = sackWithItem.value + items[itemIndex].value

  // if we add value from the sack without item
  const valueWithoutItem = sackWithoutItem.value

  if(valueWithItem > valueWithoutItem){
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight
    }
    return updatedSack
  } else {
    return sackWithoutItem
  }
}

module.exports = knapsackRecursive