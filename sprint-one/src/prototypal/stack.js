var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  someInstance.popped;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value; 
  this.count++;
};

stackMethods.pop = function() {
  if (this.count) {
    this.count--;
  }
  this.popped = this.storage[this.count];
  delete this.storage[this.count];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }  
  return this.popped;
};

stackMethods.size = function() {
  return this.count;
};


