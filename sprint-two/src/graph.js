

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {'node': node, 'connectors': []};
};

// Return a boolean value indicating if the value passed to contains 
//is represented in the graph.
Graph.prototype.contains = function(node) {
  //go through each key in this.storage and see if this.storage.key.node === node
  //{1 : {node: 1, connectors:[]}} 
  for (var key in this.storage) {
    if (Number(key) === node) {
      return true;
    }
  } 
  return false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
  
  //check if the tree still contains the node in any of the connector arrays
  //if it does, delete it from the connectors array
  // 4 = {node:4, connectors = []}


  //5 = {node:5, connectors =[]}
  // 
  for (var i = 0; i < this.storage[node]['connectors'].length; i++) {
    this.removeEdge(node, this.storage[node]['connectors'][i]);
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  
//Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
//each node has an connectors array that keeps track of what node it connects to
//goes through the connectors array to check if it equal toNode
  //fromNode = {node: value, connectors = [a, b, 65]}, toNode = 3
  //iterate through fromNode.connectors to find toNode.
  if (!this.storage[toNode] || !this.storage[fromNode]) {
    return false;
  }
  for (var i = 0; i < this.storage[toNode]['connectors'].length; i++) {
    if (this.storage[toNode]['connectors'][i] === fromNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
//go to the fromNode and add the toNode to the connectors array
  //fromNode = {node: value, connectors = [a, b, 65]}, toNode = 3
  //=> fromNode = {node: value, connectors = [a, b, 65, 3]}
  // fromNode = 3: {node: 3, connectors =[6]};
  // toNode = 6 : {node: 6, connectors = [3]};
  console.log('fromNode', fromNode, 'toNode', toNode);
  // console.log('this.storage', this.storage);
  // console.log('storagefromnode', this.storage[fromNode]);
  // console.log('current before = ', this.storage[fromNode]['connectors']);
  // console.log('before array length = ', this.storage[fromNode]['connectors'].length);
  this.storage[fromNode]['connectors'].push(toNode);
  this.storage[toNode]['connectors'].push(fromNode);
  // console.log('current after = ', this.storage[fromNode]['connectors']);
  // console.log('after array length = ', this.storage[fromNode]['connectors'].length);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //go through storage through of this.connectors 
  // find toNode and splice out that value (splice(i, 1));
  // repeat for fromNode
  for (var i = 0; i < this.storage[fromNode].connectors.length; i++) {
    if (this.storage[fromNode]['connectors'][i] === toNode) {
      this.storage[fromNode]['connectors'].splice(i, 1);
    }
  }
  for (var i = 0; i < this.storage[toNode].connectors.length; i++) {
    if (this.storage[toNode]['connectors'][i] === fromNode) {
      this.storage[toNode]['connectors'].splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(this.storage[node].node);
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


