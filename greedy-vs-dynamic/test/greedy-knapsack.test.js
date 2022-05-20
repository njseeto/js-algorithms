let greedyKnapsack = require('../greedy-knapsack')

describe('greedy knapsack', () => {
  let elements = [
    { id: 'a', value: 3, weight: 3 },
    { id: 'b', value: 6, weight: 8 },
    { id: 'c', value: 10, weight: 3 }
  ]

  it('gives the correct answer', () => {
    expect(greedyKnapsack(elements, 8)).toEqual(
      {
        "items": [
          {"id": "a", "value": 3, "weight": 3},
          {"id": "c", "value": 10, "weight": 3}
        ],
        "value": 13,
        "weight": 6
      }
    )
  })
})

// This will fail due to the greedy implementation
// Here the first item will be the only item added to the sack
// describe('greedy knapsack', () => {
//   let elements = [
//     { id: 'b', value: 6, weight: 8 },
//     { id: 'a', value: 3, weight: 3 },
//     { id: 'c', value: 10, weight: 3 }
//   ]

//   it('gives the correct answer', () => {
//     expect(greedyKnapsack(elements, 8)).toEqual(
//       {
//         "items": [
//           {"id": "a", "value": 3, "weight": 3},
//           {"id": "c", "value": 10, "weight": 3}
//         ],
//         "value": 13,
//         "weight": 6
//       }
//     )
//   })
// })
