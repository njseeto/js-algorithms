function binarySearch(sortedArr, element){
  let startIndex = 0
  let lastIndex = sortedArr.length -1
  
  while(startIndex <= lastIndex){
    const middleIndex = startIndex + Math.round((lastIndex - startIndex) / 2)
    if(element === sortedArr[middleIndex]){
      return middleIndex
    }

    if(sortedArr[middleIndex] < element){
      startIndex = middleIndex + 1
    } else {
      lastIndex = middleIndex - 1
    }
  }
}

module.exports = binarySearch