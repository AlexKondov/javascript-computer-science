// Split the array into halves and merge them recursively
function mergeSort (arr, start = 0, end = arr.length - 1) {
  var middle = Math.floor((start + end) / 2)

  if (start === end) {
    // return once we hit an array with a single item
    return [arr[start]]
  }

  return merge(
    mergeSort(arr, start, middle),
    mergeSort(arr, middle + 1, end)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  console.log(left, right)
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      left.splice(indexLeft, 1)
    } else {
      result.push(right[indexRight])
      right.splice(indexRight, 1)
    }
  }

  result = result.concat(left).concat(right)
  return result
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.time()
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]
console.timeEnd()
