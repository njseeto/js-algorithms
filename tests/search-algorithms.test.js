const findElement = require("../search-algorithms/linear-search")
const findObj = require("../search-algorithms/linear-search-objects")

let arr = [5, -3, 10, -1, 12, 6]
let ObjArr = [
  {name: 'nat', age: 32},
  {name: 'bear', age: 23}
]

describe('Finds the element in an array', () => {
  test('finds the element index', () => {
    expect(findElement(arr, 10)).toBe(2)
  })
})

describe('Does not find element in the array', () => {  
  test('shows correct message', () => {
    expect(findElement(arr, 8)).toBe(-1)
  })
})

describe('Finds the object', () => {
  test('finds object index', () => {
    expect(findObj(
      ObjArr,
      {name: 'bear', age: 23},
      function(el, it){
        return el.name === it.name
      }
      )).toBe(1)
    })
  })

describe('Does not find the object', () => {
  test('shows correct message', () => {
    expect(findObj(
      ObjArr,
      {name: 'who', age: 21},
      function(el, it){
        return el.name === it.name
      }
      )).toBe('Object not found')
    })
  })