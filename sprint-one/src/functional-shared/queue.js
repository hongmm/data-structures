var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = {};
  var storage = {};
  newQueue.storage = storage;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var index = this.size();
  this.storage[index + 1] = value;
};

queueMethods.dequeue = function() {
  var size = this.size();
  var value;
  for (var i = 1; i <= size; i++) {
    if (i === 1) {
      value = this.storage[i];
    }
    if (!this.storage[i + 1]) {
      this.storage[i] = undefined;
    } else {
      this.storage[i] = this.storage[i + 1];
    }
  }

  delete this.storage[size];
  return value;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};


