function swap (items, i, j) {
  const temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

function selectionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let min = i
    for (var j = i + 1; j < items.length; j++) {
      if (items[j] < items[min]) {
        min = j
      }
    }

    if (i !== min) {
      swap(items, i, min)
    }
  }

  return items
}

const items = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(selectionSort(items))
