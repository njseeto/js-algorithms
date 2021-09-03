function bubbleSort(arr){
  const result = [...arr] // this is a copy, it does not change the original array

  // nested loops are required as we are comparing two elements
  for(let outer = 0; outer < result.length; outer++){
    let outerElement = result[outer]

    for(let inner = outer + 1; inner < result.length; inner++){
      let innerElement = result[inner]

      // for ascending order
      if(outerElement > innerElement){
        //swap the two elements, eg: [2, 1] => [1, 2]
        result[outer] = innerElement
        result[inner] = outerElement

        outerElement = result[outer]
        innerElement = result[inner]
      }
    }
  }

  return result
}

module.exports = bubbleSort
