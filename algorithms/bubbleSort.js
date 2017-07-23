function swap (items, i, j) {
  const temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

function bubbleSort (items) {
  for (var i = 0; i < items.length; i++) {
    for (var j = 0; j < items.length - i; j++) {
      if (items[j] > items[j + 1]) {
        swap(items, j, j + 1)
      }
    }
  }

  return items
}

const items = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(bubbleSort(items))
