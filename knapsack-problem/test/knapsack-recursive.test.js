const knapsackRecursive = require('../knapsack-recursive.js')

describe('Knapsack Recursive solution', () => {
  let items = [
    { id: 'a', value: 3, weight: 3 },
    { id: 'b', value: 6, weight: 8 },
    { id: 'c', value: 10, weight: 3 }
  ]

  let itemIndex = items.length - 1
  
  test('maximises the bag', () => {
    let maxWeight = 8
    
    expect(knapsackRecursive(items, maxWeight, itemIndex))
    .toEqual({
      items: [
        { id: 'a', value: 3, weight: 3 },
        { id: 'c', value: 10, weight: 3 }
      ],
      value: 13,
      weight: 6
    })
  })

  test('maximises the bag', () => {
    let maxWeight = 5
    
    expect(knapsackRecursive(items, maxWeight, itemIndex))
    .toEqual({
      items: [
        { id: 'c', value: 10, weight: 3 }
      ],
      value: 10,
      weight: 3
    })
  })

  test('maximises the bag', () => {
    let maxWeight = 15
    
    expect(knapsackRecursive(items, maxWeight, itemIndex))
    .toEqual({
      items: [
        { id: 'a', value: 3, weight: 3 },
        { id: 'b', value: 6, weight: 8 },
        { id: 'c', value: 10, weight: 3 }
      ],
      value: 19,
      weight: 14
    })
  })
})