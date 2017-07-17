class BinarySearchTree {
  constructor() {
    this.root = null
  }
  contains(value) {
    let found = false
    let current = this.root

    while (!found && current) {
      if (value < current.value) {
        // If the value is less than the current go left
        current = current.left
      } else if (value > current.value) {
        // If it's higher than the current go right
        current = current.right
      } else {
        // We have found the value
        found = true
      }
    }

    return found
  }
  add(value) {
    const node = {
      value,
      left: null,
      right: null
    }

    if (this.root === null) {
      this.root = node
      return
    }

    let current = this.root
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node
          break
        } else {
          current = current.left
          continue
        }
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node
          break
        } else {
          current = current.right
          continue
        }
      } else {
        // There is an equal value => we do nothing
        break
      }
    }
  }
  remove(value) {
    let found = false
    let parent = null
    let current = this.root

    while (!found && current) {
      if (value < current.value) {
        parent = current
        current = current.left
      } else if (value > current.value) {
        parent = current
        current = current.right
      } else {
        found = true
      }
    }

    if (!found) {
      return false
    }

    let childCount = (current.left !== null ? 1 : 0) +
      (current.right !== null ? 1 : 0)

    if (current === this.root) {
      switch (childCount) {
        case 0:
          this.root = null
          break
        case 1:
          this.root = (this.left === null ? this.right : this.left)
          break
        case 2:
          // new root will be the old root's left child
          // ...maybe
          let replacement = this.root.left
          let replacementParent = null

          // find the right-most leaf node to be
          // the real new root
          while (replacement.right !== null) {
            replacementParent = replacement
            replacement = replacement.right
          }

          // it's not the first node on the left
          if (replacementParent !== null) {
            // remove the new root from it's
            // previous position
            replacementParent.right = replacement.left

            // give the new root all of the old
            // root's children
            replacement.right = this.root.right
            replacement.left = this.root.left
          } else {
            // just assign the children
            replacement.right = this.root.right
          }

          // officially assign new root
          this.root = replacement
          break
      }
    } else {
      switch (childCount) {
        case 0:
          if (current.value < parent.value) {
            parent.left = null
          } else {
            parent.right = null
          }
          break
        case 1:
          if (current.value < parent.value) {
            parent.left = (current.left === null ? current.right : current.left)
          } else {
            parent.right = (current.left === null ? current.right : current.left)
          }
          break
        case 2:
          // reset pointers for new traversal
          // use Object.assign to avoid reference issues on object
          let replacement = current.left
          let replacementParent = Object.assign({}, current)

          // find the right-most node
          while (replacement.right !== null) {
            replacementParent = replacement
            replacement = replacement.right
          }

          replacementParent.right = replacement.left

          // assign children to the replacement
          if (current.left.value !== replacement.value) {
            replacement.left = current.left
          }

          if (current.right.value !== replacement.value) {
            replacement.right = current.right
          }

          // place the replacement in the right spot
          if (current.value < parent.value) {
            parent.left = replacement
          } else {
            parent.right = replacement
          }
          break
      }
    }
  }
  traverse (process) {
    const inOrder = (node) => {
      if (node.left !== null) {
        inOrder(node.left)
      }

      process.call(this, node)

      if (node.right !== null) {
        inOrder(node.right)
      }
    }

    inOrder(this.root)
  }
  size () {
    let length = 0

    this.traverse(() => {
      length++
    })

    return length
  }
  toArray () {
    let nodes = []

    this.traverse((node) => {
      nodes.push(node.value)
    })

    return nodes
  }
  toString () {
    return this.toArray().toString()
  }
}

const tree = new BinarySearchTree()
tree.add(8)
tree.add(3)
tree.add(10)
tree.add(1)
tree.add(6)
tree.add(4)
tree.add(7)
tree.add(14)
tree.add(13)
// tree.add(2)
// console.log(tree.size())
// console.log(tree.toArray())
// console.log(tree.toString())
console.log(tree.remove(3))
console.log(JSON.stringify(tree.root, null, 2))
