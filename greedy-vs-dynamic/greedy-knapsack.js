const greedyKnapsack = (elements, capacity) => {
  const sack = { items: [], value: 0, weight:0 }
  let remainingCapacity = capacity

  for (const el of elements){
    if (el.weight <= remainingCapacity) {
      sack.items.push(el)
      sack.value += el.value
      sack.weight += el.weight
      remainingCapacity -= el.weight
    }
  }

  return sack
}

module.exports = greedyKnapsack
