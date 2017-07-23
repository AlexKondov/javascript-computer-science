class LinkedList {
  constructor () {
    this._length = 0
    this._head = null
  }
  add (data) {
    const node = {
      data,
      next: null
    }
    if (this._head === null) {
      this._head = node
      this._length++
      return
    }

    let current = this._head

    while (current.next) {
      current = current.next
    }

    current.next = node
    this._length++
  }
  get (index) {
    if (index <= -1 || index >= this._length) {
      return null
    }

    let current = this._head
    let i = 0

    while (i++ < index) {
      current = current.next
    }

    return current
  }
  remove (index) {
    if (index <= -1 || index >= this._length) {
      return null
    }

    let current = this._head
    let previous = null
    let i = 0

    if (index === 0) {
      this._head = current.next
    } else {
      while (i++ < index) {
        previous = current
        current = current.next
      }

      previous.next = current.next
    }

    this._length--
    return current.data
  }
  toArray () {
    const list = []
    let current = this._head

    while (current) {
      list.push(current.data)
      current = current.next
    }

    return list
  }
}

const linkedList = new LinkedList()
linkedList.add(25)
linkedList.add(5)
linkedList.add(54)
console.log(linkedList.toArray())
console.log(linkedList._length)
console.log(linkedList.get(2))
console.log(linkedList.remove(1))
console.log(linkedList.remove(0))
console.log(linkedList.toArray())
