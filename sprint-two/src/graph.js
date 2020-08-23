

// Instantiate a new graph
var Graph = function() {
  this._nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    var newNode = Node(node); // ex, if node = 1, Node(node) = {value: 1}
    this._nodes[node] = newNode;
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this._nodes[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var toNode = this._nodes[node];
  for (var i = 0; i < toNode.edge.length; i++) {
    var nodeIndex = toNode.edge[i];
    var fromNode = this._nodes[nodeIndex];
    this.removeEdge(toNode.value, fromNode.value);
  }
  delete this._nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (fromNode === toNode) {
    return true;
  }

  var node1 = this._nodes[fromNode];
  var node2 = this._nodes[toNode];

  if (node1.edge.includes(toNode) && node2.edge.includes(fromNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode === toNode) {
    return;
  }

  var node1 = this._nodes[fromNode];
  var node2 = this._nodes[toNode];

  if (!node1.edge.includes(toNode) && !node2.edge.includes(fromNode)) {
    node1.edge.push(toNode);
    node2.edge.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var node1 = this._nodes[fromNode];
  var node2 = this._nodes[toNode];

  if (node1.edge.includes(toNode) && node2.edge.includes(fromNode)) {
    node1.edge.splice(node1.edge.indexOf(toNode));
    node2.edge.splice(node2.edge.indexOf(fromNode));
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodeValues = Object.keys(this._nodes); // [1,2,3,4]
  for (var i = 0; i < nodeValues.length; i++) {
    cb(Number(nodeValues[i]));
  }
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.edge = [];

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


