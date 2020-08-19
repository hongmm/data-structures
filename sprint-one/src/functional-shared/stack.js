var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.push = push;
  someInstance.pop = pop;
  someInstance.size = size;

  _.extend(someInstance, Stack.stackMethods);

  return someInstance;
};

var stackMethods = {};


