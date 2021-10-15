// Permutations without repetition

/* ------------------------------------------------------------
We use recursion as we do not know how many items will be in 
the array.
------------------------------------------------------------- */

const permutationsWithoutReps = (arr) => {
  const permutations = []

  if(arr.length === 1 ) {
/* --------------------------------------------------------------
If we are on the last item in the array, we return the last item 
in an array.
We return this item within an array as we expect the resulting 
`permutations` to be an array of arrays
--------------------------------------------------------------- */ 
        return [arr]
      }

  // we split the array until we have one item left
  const partialPermutations = permutationsWithoutReps(arr.slice(1))
  const firstOption = arr[0]

  for(let i = 0; i < partialPermutations.length; i++) {
    const partialPermutation = partialPermutations[i]

    for(let j = 0; j <= partialPermutation.length; j++) {
      permutationInFront = partialPermutation.slice(0, j)
      permutationAfter = partialPermutation.slice(j)

      permutations.push(
        permutationInFront
        .concat([firstOption], permutationAfter)
      )
    }
  }

  return permutations
}

module.exports = permutationsWithoutReps
