var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(Stack.stackMethods);
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

// someInstance.push = function(value) {
//   var index = someInstance.size();
//   storage[index + 1] = value;
// };

// so meInstance.pop = function() {
//   var index = someInstance.size();
//   var value = storage[index];
//   delete storage[index];
//   return value;
// };

// someInstance.size = function() {
//   return Object.keys(storage).length;
// };
