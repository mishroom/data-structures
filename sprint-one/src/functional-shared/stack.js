var Stack = function(loc) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {};

  result['count'] = 0;  
  result['storage'] = {};
  result['popped'];
  extend(result, stackMethods);
  return result;
};

var extend = function (obj, method) {
  for (var key in method) {
    obj[key] = method[key];  
  }
};


var stackMethods = {
  pop: function() {
    if (this.count) {
      this.count--;
    }
    this.popped = this.storage[this.count];
    delete this.storage[this.count];
    return this.popped;
    
  },
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  size: function() {
    return this.count;
  }
};

