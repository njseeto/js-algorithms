function recursiveBinarySearch(sortedArr, element, offset){
  let startIndex = 0
  let lastIndex = sortedArr.length -1
  const middleIndex = Math.round((lastIndex - startIndex) / 2)

  if(element === sortedArr[middleIndex]){
    return middleIndex + offset
  }

  if(sortedArr[middleIndex] < element){
    startIndex = middleIndex + 1
    offset = offset + middleIndex + 1
  } else {
    lastIndex = middleIndex
  }
  return recursiveBinarySearch(sortedArr.slice(startIndex, lastIndex + 1), element, offset)
}

module.exports = recursiveBinarySearch