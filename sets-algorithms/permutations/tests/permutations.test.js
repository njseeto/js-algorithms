const permutationsWithoutReps = require('../permutations')
const permutationWithReps = require('../permutations-repetition')

describe('without repetitions', () => {
  /* ----------------------------------------------------------------
  Note: The forumla for permutations without repetitions of a set
  that contains, for example 4 items is: 4 x 3 x 2 x 1 = 24
  ---------------------------------------------------------------- */

  const items = [ 'a', 'b', 'c', 'd']

  it('should find every combination for 4 item permutations', () => {
    expect((permutationsWithoutReps(items)).length).toEqual(24)
  })

  const arr = [ 'a', 'b', 'c', 'd', 'e']

  it('should find every combination for 5 item permutations', () => {
    expect((permutationsWithoutReps(arr)).length).toEqual(120)
  })

  const options = [ 'a', 'b', 'c', 'd', 'e', 'f']

  /* ----------------------------------------------------------------
  Note how the length (number of permutations) is increasing very
  quickly even though the input array is only increasing by one element
  ----------------------------------------------------------------- */
  it('should find every combination for 6 item permutations', () => {
    expect((permutationsWithoutReps(options)).length).toEqual(720)
  })
})

describe ('with repetition', () => {
  const items = [ 1, 2, 3 ]
  let length = 3

  it('should find every combination for 3 items', () => {
    expect((permutationWithReps(items, length).length)).toEqual(27)
  })

  const arr = [ 1, 2, 3, 4 ]

  it('should find every combination for 3 items', () => {
    expect((permutationWithReps(arr, length).length)).toEqual(64)
  })

  /* ----------------------------------------------------------------
  Note how the number of permutations increases significantly by
  increasing the `size` or `length` by one.
  ----------------------------------------------------------------- */
  const options = [ 1, 2, 3, 4 ]
  let size = 4

  it('should find every combination for 3 items', () => {
    expect((permutationWithReps(options, size).length)).toEqual(256)
  })
})