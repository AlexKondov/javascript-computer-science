function binarySearch (list, value) {
  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)

  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }

    middle = Math.floor((start + stop) / 2)
  }

  return (list[middle] !== value) ? -1 : middle
}

const list = [2, 5, 8, 9, 13, 45, 67, 99]
console.log(binarySearch(list, 99)) // 7 -> returns the index of the item
