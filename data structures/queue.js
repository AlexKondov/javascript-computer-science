class Queue {
  constructor () {
    this.items = []
  }
  enqueue (item) {
    this.items.unshift(item)
  }
  dequeue () {
    this.items.pop()
  }
  isEmpty () {
    return this.items.length === 0
  }
  size () {
    return this.items.length
  }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(23)
queue.enqueue(1)
queue.dequeue()
console.log(queue.isEmpty())
console.log(queue.size())
console.log(queue)
