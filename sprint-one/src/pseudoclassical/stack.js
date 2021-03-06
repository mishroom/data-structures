var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
  this.popped;
  
};

Stack.prototype.pop = function() {
  if (this.count) {
    this.count--;
  }
  this.popped = this.storage[this.count];
  delete this.storage[this.count];
  return this.popped;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.size = function() {
  return this.count;
};

