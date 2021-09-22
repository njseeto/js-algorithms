const cartesianProduct = (arr1, arr2) => {
  const result = []
  for(const a of arr1) {
    for(const b of arr2) {
      result.push([a, b])
    }
  }
  return result
}

module.exports = cartesianProduct
