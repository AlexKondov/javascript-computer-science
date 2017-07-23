function quickSort (items, left, right) {
  let index = partition(items, left, right)

  if (items.length > 1) {
    if (left < index - 1) {
      quickSort(items, left, index - 1)
    }

    if (right > index) {
      quickSort(items, index, right)
    }
  }

  return items
}

function partition (items, left, right) {
  const pivot = items[Math.floor((left + right) / 2)]
  let i = left
  let j = right

  while (i < j) {
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }

    if (i <= j) {
      swap(items, i, j)
      i++
      j--
    }
  }

  return i
}

function swap (items, i, j) {
  const temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

const items = [4, 2, 6, 5, 3, 9]
console.log(quickSort(items, 0, 5))
