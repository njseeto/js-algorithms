function mergeSort(arr){
  // we need to split the array into smaller arrays
  if (arr.length < 2){
    return arr
  }
  // these smaller arrays should be sorted
  if (arr.length === 2){
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr
  }

  const middle = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)

  /* we need to continue to split the array
    until there are only two elements
    this is done recursively */
  const sortedLeftArr = mergeSort(leftArr)
  const sortedRightArr = mergeSort(rightArr)

  /* we need to merge these sorted arrays */
  let leftIndex = 0
  let rightIndex = 0
  let mergedArr = []

  while (
    leftIndex < sortedLeftArr.length ||
    rightIndex < sortedRightArr.length
    ) {
      if (
        /* the left array will always be smaller in length if
          the arr has an uneven number of elements.
          We need to cover this scenario */
        leftIndex >= sortedLeftArr.length ||
        sortedLeftArr[leftIndex] > sortedRightArr[rightIndex]
      ){
        mergedArr.push(sortedRightArr[rightIndex])
        rightIndex++
      } else {
        mergedArr.push(sortedLeftArr[leftIndex])
        leftIndex++
      }
    }
  return mergedArr
}

module.exports = mergeSort
