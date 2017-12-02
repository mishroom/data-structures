var BinarySearchTree = function(value) {
//left property - where it stores the value less 
// than the current value
//right property - where it stores the values greater 
// the current value
  var storage = {};
  storage.right;
  storage.left;
  extend (storage, methods);
  // console.log("storage: ", storage);
  return storage;

};

var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};
//console.log(BinarySearchTree);
var methods = {};
//methods.left = function () {};
//methods.right = function () {};
methods.insert = function () {};
methods.contains = function () {};
methods.depthFirstLog = function () {};

/*
 * Complexity: What is the time complexity of the above functions?
 */
