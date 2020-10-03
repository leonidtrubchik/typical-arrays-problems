
exports.min = function min (array) {
  if (Array.isArray(array) && array.length > 0) {
    let maxValue = Math.min.apply(null, array)
    return maxValue
    
  }
  else {
    return 0
  }
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length > 0) {
    let minValue = Math.max.apply(null, array)
    return minValue
    
  }
  else {
    return 0
  }
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length > 0) {

    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
    return sum / array.length
    
  }
  else {
    return 0
  }
}
