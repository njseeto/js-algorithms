const cartesianProduct = require('../cartesian-product')

let colours = ['red', 'blue']
let sizes = ['small', 'large']
let result = [ ['red', 'small'], ['red', 'large'], ['blue', 'small'], ['blue', 'large'] ]

describe('for two sets of the same size', () => {
  it('should find every combination', () => {
    expect(cartesianProduct(colours, sizes)).toEqual(result)
  })
})

describe('for two sets of the different sizes', () => {
  let colours = ['red', 'blue', 'green']
  let result = [
     ['red', 'small'],
     ['red', 'large'],
     ['blue', 'small'],
     ['blue', 'large'],
     ['green', 'small'],
     ['green', 'large']
  ]
  it('should find every combination', () => {
    expect(cartesianProduct(colours, sizes)).toEqual(result)
  })
})
