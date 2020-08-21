var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.storage = {};

  list.addToTail = function(value) {
    var listSize = Object.keys(this.storage).length;
    var newNode = Node(value);
    if (listSize === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode.value;
      this.tail = newNode;
    }
    this.storage[value] = newNode;
  };

  list.removeHead = function() {
    var headToRemove = this.head;
    var nextInLine = this.head.next;
    this.head = this.storage[nextInLine];

    delete this.storage[headToRemove.value];
    return headToRemove.value;
  };

  list.contains = function(target) {
    if (this.storage[target]) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
