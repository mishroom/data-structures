var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  var result;
  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
  //we want to return value at someInstance[0]
  //, then remove
  //shift ever value moves down 1 key value
  // ex {0:a, 1:b, 2:c, 3:d}
  // {1:b, 2:c, 3:d}    
  // {0:b, 1:c, 2:d, 3:d}

    if (count) {
      count--;
    } 
    result = storage['0'];
    delete storage['0'];
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    return result; 
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
