// Permutation with repetition

const permutationWithReps = (arr, length) => {
  const permutations = []
  
    /* --------------------------------------------
    Within our base case, we will have an array of one item,
    but we want to wrap each of those items in an array.
    Eg: [ [1], [2], [3] ]
    --------------------------------------------- */
  if(length === 1){
    return arr.map(item => [item])
  }

  const partialPermutations = permutationWithReps(arr, length - 1)
  
  for(const item of arr) {
    for(const existingPermutation of partialPermutations) {
      permutations.push([item].concat(existingPermutation))
    }
  }

  return permutations
}

module.exports = permutationWithReps


/* --------------------------------------------
Time complexity: O(n^r)
Where `n` is the number of options in the array
and `r` is the wanted length.
--------------------------------------------- */