var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // your code here
  newTree.children = []; 
  extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //push value into newTree.children
  // in each child in newTree, push the value in to 
  //create {value:val, children:[]}
  this.children.push(Tree(value));
  
};

treeMethods.contains = function(target, foundTarget) {
  //check if newTree.value is target, if not, 
  //iterate through children array to find
  if (!foundTarget) {
    foundTarget = false;
  }
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    foundTarget = this.children[i].contains(target, foundTarget);
  }
return foundTarget;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
