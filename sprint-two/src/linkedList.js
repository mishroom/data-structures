// var LinkedList = function() {
//   // var linkedListNode = {};
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value) {

//     if (list.tail) {
//     var isHead = false;
//       if (!list.head) {
//         list.head = {};
//         list.head.value = list.tail.value;
//         isHead = true;
//       }
//       var name = list.tail.value;
//       list[name] = list.tail;
//       list[name].next = value;
//     }
//     list.tail = Node(value);
//     if (isHead) {
//       list.head.next = list.tail.value;
//     }
 
    
//   };

//   list.removeHead = function() {
//     //O(1) 
//     // create var to keep track of head.next   
//     //delete head
//     //reassigne head.next to head
//     var keys = Object.entries(list);
//     if (list.head) {
//       var popped = list.head.value;
//       var nextNode = list.head.next;
//       var nextNext = list.head.next.next;
      
//       list.head.value = nextNode;
//       list.head.next = nextNext;
      
//     }
//     return keys[1][1].value;
//     //head is returning null for 5th test
//   };

//   list.contains = function(target) {
//     //traverse through node to find value
//     //O(n)
//     //go through the keys of the list
//     var isContains = false;
//     for (var keys in list) {
//       if (keys['value'] === target || list.head.value === target || list.tail.value === target) {
//         isContains = true;
//       } 
//     }
//     //check the values of the keys
//     //see if it equals target;
        
//     return isContains;

//   };

//   return list;
// };

// var Node = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };

// /*
//  * Complexity: What is the time complexity of the above functions?
//  */

// // list = {
// //   head: {value: val, next: yt6},
// //   yt6: {value: yt6, next: hello},
// //   hello: {value: hello, next: blubber}
// //   blubber: {value: blubber, next: cookies}
// //   tail: {value: cookies, next:null} 
// // }  


// // list = {
//   // 
// //   head: {value: yt6, next: hello},
// //   hello: {value: hello, next: blubber}
// //   blubber: {value: blubber, next: cookies}
// //   tail: {value: cookies, next:null} 
// // }      

// // node = 

//    //O(n)
//     //iterate through for (key in list), 
//     //if(head){find key.next===null,
//         //call Node(value) save that to list.value
//         // key.next = value
//     //} else {
//       //list.head=Node(value)
//     //}

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //no value = if head and tail are empty, add value to head and tail
    if (!list.head && !list.tail) {
        list.head = Node(value);
        list.head.next = 'tail';
    //list = {
    // head = {value: a, next:tail} || head = Node(value)
    // head.next = value;
        list.tail = Node(value);
    // tail = {value: a, next: null} || tail = Node(value);
  // }
  } else if (list.head.next === 'tail') {
    //one value = head and tail both have value;
    // head has a value and next is tail, want head to keep it,
    // and tail to become Node(value);
          // if there is a head and head.next === tail
          //head.next should be the value
    list.head.next = value;
    list[value] = Node(value);
    list[value].next = 'tail';
    list.tail = Node(value);
    //list = {
    // head = {value:a, next: b},
          //list.value = Node(value);
          // list.value.next = tail;
    // b = {value:b, next: tail},
    // tail = {value: b, next: null}
    // }
  } else {
    //otherwise if there is a head and head.next !== tail
    // var beforeTail = tail.value
    var beforeTail = list.tail.value;
    // list.beforeTail.next = value;
    list[beforeTail].next = value;
    // newBeforeTail = Node(value);
    list[value] = Node(value);
    // newBeforeTail.next = tail;
    list[value].next = 'tail';
    // tail.value = value;
    list.tail.value = value;
  }
  };

  list.removeHead = function() {
    //list = {
    // head = {value:a, next: b},
          //list.value = Node(value);
          // list.value.next = tail;
    // b = {value:b, next: c},
    // c = {value: c, next = tail}
    // tail = {value: c, next: null}
    // }//
// assign head.value to popped
// assign head.value to head.next
  var popped = list.head.value;
  list.head.value =list.head.next;
  return popped;
  };

  list.contains = function(target) {
    // console.log(list.head.value);
    for (var key in list) {
      if (list[key].value === target) {
        return true;
      }
      // console.log(list[key].value);
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