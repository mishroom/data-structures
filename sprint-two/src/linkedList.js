var LinkedList = function() {
  // var linkedListNode = {};
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // for (var key in list) {
    //   if (list.head) {
    //     if (list.key.next === null) {
    //       list.key.next = value;
    //       list.tail = Node(value);
    //       return list;
    //     }
    //   } else {
    //     list.head = Node(value);
    //   }
    // }
    //if the tail does not exist, we want to set the tail = new node
    //if tail does exists, we need rename it to its value, change next
    // value, we need to create the new tail
    // if (Object.keys(list)) {
    //   if (!list.head) {
    //     list.head = Node(value);
    //     list.head.next = value;
    //   }
    // }
    if (list.tail) {
    var isHead = false;
      if (!list.head) {
        list.head = {};
        list.head.value = list.tail.value;
        isHead = true;
      }
      var name = list.tail.value;
      list[name] = list.tail;
      list[name].next = value;
    }
    list.tail = Node(value);
    if (isHead) {
      list.head.next = list.tail.value;
    }
    //}
    
  };

  list.removeHead = function() {
    //O(1) 
    // create var to keep track of head.next   
    //delete head
    //reassigne head.next to head
    var keys = Object.entries(list);
    if (list.head) {
      var popped = list.head.value;
      var nextNode = list.head.next;
      var nextNext = list.head.next.next;
      delete list.head;
      list.head = {};
      list.head.value = nextNode;
      list.head.next = nextNext;
      
    }
    return keys[1][1].value;
    //head is returning null for 5th test
  };

  list.contains = function(target) {
    //traverse through node to find value
    //O(n)
    //go through the keys of the list
    var isContains = false;
    for (var keys in list) {
      if (keys['value'] === target || list.head.value === target || list.tail.value === target) {
        isContains = true;
      } 
    }
    //check the values of the keys
    //see if it equals target;
        
    return isContains;

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

// list = {
//   head: {value: val, next: yt6},
//   yt6: {value: yt6, next: hello},
//   hello: {value: hello, next: blubber}
//   blubber: {value: blubber, next: cookies}
//   tail: {value: cookies, next:null} 
// }  


// list = {
  // 
//   head: {value: yt6, next: hello},
//   hello: {value: hello, next: blubber}
//   blubber: {value: blubber, next: cookies}
//   tail: {value: cookies, next:null} 
// }      

// node = 

   //O(n)
    //iterate through for (key in list), 
    //if(head){find key.next===null,
        //call Node(value) save that to list.value
        // key.next = value
    //} else {
      //list.head=Node(value)
    //}