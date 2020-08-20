var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  var storage = {};
  newStack.storage = storage;
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  var index = this.size();
  this.storage[index + 1] = value;
};

stackMethods.pop = function() {
  var index = this.size();
  var value = this.storage[index];
  delete this.storage[index];
  return value;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
