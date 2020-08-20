class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var index = this.size();
    this.storage[index + 1] = value;
  }

  dequeue() {
    var index = this.size();
    var first;
    for (var i = 1; i <= index; i++) {
      if (i === 1) {
        first = this.storage[i];
      }
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[index];
    return first;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

var newQueue = new Queue();
