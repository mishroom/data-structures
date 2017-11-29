var Stack = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  var result;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count) {
      count--;
    }
    result = storage[count];
    delete storage[count];
    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
