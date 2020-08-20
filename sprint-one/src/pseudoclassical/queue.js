var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var index = this.size();
  this.storage[index + 1] = value;
};

Queue.prototype.dequeue = function() {
  var size = this.size();
  var value;
  for (var i = 1; i <= size; i++) {
    if (i === 1) {
      value = this.storage[i];
    }
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[size];
  return value;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

var testQueue = new Queue();