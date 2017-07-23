class Stack {
  constructor () {
    this.items = []
  }
  push (item) {
    this.items.push(item)
  }
  pop () {
    this.items.pop()
  }
  isEmpty () {
    return this.items.length === 0
  }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(5)
stack.push(6)
stack.push(1)
stack.push(9)
stack.pop()
stack.pop()
stack.push(3)
console.log(stack.isEmpty())
console.log(stack)
