var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    var index = someInstance.size();
    storage[index + 1] = value;
  };

  someInstance.dequeue = function() {
    // remove the first element of the obj
    var size = someInstance.size();
    var value;
    for (var i = 1; i <= size; i++) {
      if (i === 1) {
        value =  storage[i];
      }
      if (!storage[i+1]) {
        storage[i] = undefined;
      } else {
        storage[i] = storage[i+1];
      }
    }

    delete storage[size];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
