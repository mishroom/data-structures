

var BinarySearchTree = function(value) {
//left property - where it stores the value less 
// than the current value
//right property - where it stores the values greater 
// the current value
  
  var storage = {};
  // if (!node) {
  //   node = storage;
  // }
  console.log("storage in main function: ", storage);
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
  console.log("storage in insert: ", this);
//return null;
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

methods.addNode = function (value) {
  return {'value': value, left: {}, right: {}};
};
methods.contains = function () {};
methods.depthFirstLog = function () {};

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