function quicksort(arr){
  const copiedArr = [...arr]

  if(copiedArr.length <= 1){
    return copiedArr
  }

  // shift() removes the first element of the arr and
  // returns that removed element
  const pivotElement = copiedArr.shift()
  const centerElementArr = [pivotElement]
  const smallElementArr = []
  const largeElementArr = []

  while(copiedArr.length){
    // note the copiedArr in here has already had shift() applied
    // so another shift() would take the new first element
    // by using shift() we also shorten the copiedArr length
    const currentElement = copiedArr.shift()
    if (currentElement === pivotElement) {
      centerElementArr.push(currentElement)
    } else if (currentElement < pivotElement) {
      smallElementArr.push(currentElement)
    }
    else {
      largeElementArr.push(currentElement)
    }
  }

  // we need to sort the smallElementArr and largeElementArr
  // this can be done recursively
  const sortedSmallElementsArr = quicksort(smallElementArr)
  const sortedLargeElementsArr = quicksort(largeElementArr)

  // once the base case is reached ie: copiedArr.length <= 1
  // we can concatenate the arrays
  return sortedSmallElementsArr.concat(
    centerElementArr,
    sortedLargeElementsArr
  )
}

module.exports = quicksort
