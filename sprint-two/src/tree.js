var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // takes any value, sets that as the target of a node, and adds that node as a child of the tree
  var childNode = Tree(value);
  this.children.push(childNode);
};

treeMethods.contains = function(target) {
  // takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
  // this = the root/very bottom node
  if (this.value && this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      var result = this.children[i].contains(target);
      if (result) {
        return true;
      }
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
