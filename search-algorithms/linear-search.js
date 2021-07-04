// function findElement(arr, element) {
//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] == element){
//       return i
//     }
//   }
//   return 'Element not found'
// }

const findElement = (arr, element) => arr.findIndex(arr => arr === element)

module.exports = findElement