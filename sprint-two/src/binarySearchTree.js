class BinarySearchTree {
  constructor(value) {
    this.left;
    this.right;
    this.value = value;
  }

  insert(value) {
    // which accepts a value and places it in the tree in the correct position.
    if (this.value > value) {
      // go left
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }

    } else {
      // go right
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    // which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
    if (this.value === value) {
      return true;
    }

    if (this.value > value && this.left) {
      return this.left.contains(value);
    }

    if (this.value < value) {
      return !!this.right && this.right.contains(value);
    }

    return false;
  }

  depthFirstLog(cb) {
    // which accepts a callback and executes it on every value contained in the tree
    cb(this.value);

    if (this.left) {
      this.left.depthFirstLog(cb);
    }

    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
