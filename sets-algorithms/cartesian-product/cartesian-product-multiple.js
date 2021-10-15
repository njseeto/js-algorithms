const cartesianProduct = (arr1, arr2) => {
  const result = []
  for(let a of arr1) {
/*
  The guard clause below is to ensure the array
  can be flattened by the spread operator before being
  pushed into the result array.
  Without the spread operator, the cartesian function
  will return nested arrays, eg:
  [
    [red, dog, [rose]],
    [blue, cat, [sunflower]],
    [green, bear, [holly]]
  ]
*/
    if(!Array.isArray(a)){
      a = [a]
    }
    for(const b of arr2) {
      result.push([...a, b])
    }
  }
  return result
}

const cartesian = (...sets) => {
  let tempProduct = sets[0]

/* We need to start the loop at index one (ie. the second set)
  to prevent duplication as we already have the first set in 
  the tempProduct.
  We use the already existing cartesianProduct method to slowly
  build up the final array.
  So the first iteration of the loop we will make an array that
  contains the combinations for the first and second sets.
  By re-assigning the tempProduct, we can slowly add each set to
  the final array.
*/
  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartesianProduct(tempProduct, sets[i])
  }

  return tempProduct
}