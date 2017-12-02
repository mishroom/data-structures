

var BinarySearchTree = function(value) {
//left property - where it stores the value less 
// than the current value
//right property - where it stores the values greater 
// the current value
  
  var storage = {};
  // if (!node) {
  //   node = storage;
  // }
  // console.log("storage in main function: ", storage);
  // console.log("node in main function: ", node);
  storage.value = value;
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

methods.insert = function (item) {
  //iterate through the tree
  // console.log("storage in insert: ", this);
  if (item < this.value) {
    //go to left
    if (!this.left) {
      this.left = BinarySearchTree(item);
    } else {
      this.left.insert(item);
    }   
  } else {
    //go to right
    if (this.right) {
      this.right.insert(item);
    } else {
      this.right = BinarySearchTree(item);
    }
  }
  
};

// node1 = BinarySearchTree(1);
// node2 = BinarySearchTree(2);
// node3 = BinarySearchTree(3);

// methods.addNode = function (value) {
//   return {'value': value, left: {}, right: {}};
// };
// return boolean if something exists
// we want to store the t/f value into a t/f counter
// true, break the recursion loops, false, recurse
// at the end, return the t/f counter
methods.contains = function (item) {
  var doesContain;
  if (this.value) {
    if (item === this.value) {
      //console.log("passed at value", item);
      return true;
    } else if (item < this.value) {
      if (!this.left) {
        return false;
      }
      doesContain = this.left.contains(item);
    } else if (item > this.value) {
      if (!this.right) {
        return false;
      }
      doesContain = this.right.contains(item);
    }
  }
  return doesContain;
};

methods.depthFirstLog = function (callback) {
  // go through each node in tree, apply callback if a value exists
// checks if there is a value in the left or right
// if there is, apply callback to the value
// if this.value.right -> do recursive callback application
// if this.value.left -> same thing
  // console.log('value:', this.value);
  if (this.value) {
    // console.log('callbacked value:', callback(this.value));
    callback(this.value);
    // console.log(this);
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }   
    
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// node = {
//   value: val,
//   left: {},
//   right: {}
// };
// alphabetStorage = 
// { value: 'F',
//   left: {
//     value: 'D',
//     left: {
//       value: 'B',
//       left: {
//         value: 'C',
//         left: {},
//         right: {}
//       },
//       right: {
//         value: 'A',
//         left: {},
//         right: {},
//       }
//     },
//     right: {
//       value: 'E',
//       left: {},
//       right: {}
//     },
//   },
//   right: {
//     value: 'H',
//     left: {
//       value: 'G',
//       left: {},
//       right: {}
//     },
//     right: {
//       value: 'J',
//       left: {
//         value: 'I',
//         left: {},
//         right: {}
//       },
//       right: {
//         value: 'K',
//         left: {},
//         right: {}
//       }
//     },
//   },
// };