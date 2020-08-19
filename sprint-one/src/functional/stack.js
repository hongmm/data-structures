var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // array = [1,2,3]
  // array[0] = 1
  // ...

  // storage = {
  //   0: "1",
  //   1: "2",
  //   2: "3",
  // }

  // array[0] === storage[1]

  // Implement the methods below
  someInstance.push = function(value) {
    var index = someInstance.size();
    storage[index + 1] = value;
  };

  someInstance.pop = function() {
    var index = someInstance.size();
    var value = storage[index];
    delete storage[index];
    return value;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
