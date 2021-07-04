function findObj(arr, element, comparatorFn){
  let index = 0
  for(const item of arr){
    if(
      typeof element === 'object' && 
      element !== null && 
      comparatorFn(element, item)
      ){
        return index
      }
      index++
  }
  return 'Object not found'
}

module.exports = findObj