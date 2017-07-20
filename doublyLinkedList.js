class DoublyLinkedList {
  constructor () {
    this._head = null
    this._tail = null
    this._length = 0
  }
  add (data) {
    const node = {
      data,
      next: null,
      prev: null
    }

    if (this._length === 0) {
      this._head = node
      this._tail = node
    } else {
      this._tail.next = node
      node.prev = this._tail
      this._tail = node
    }

    this._length++
  }
  remove (index) {
    if (index <= -1 || index >= this._length) {
      return null
    }

    let current = this._head
    let i = 0

    if (index === 0) {
      if (!this._head) {
        this._tail = null
      } else {
        this._head = current.next
        this._head.prev = null
      }
    } else if (index === this._length - 1) {
      current = this._tail
      this._tail = current.prev
      this._tail.next = null
    } else {
      while (i++ < index) {
        current = current.next
      }

      current.prev.next = current.next
    }

    this._length--
    return current.value
  }
}

const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.add(5)
doublyLinkedList.add(1)
doublyLinkedList.add(6)
doublyLinkedList.add(4)
doublyLinkedList.add(3)
doublyLinkedList.add(9)
doublyLinkedList.remove(5)
console.log(doublyLinkedList)
