var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
  this.popped;
};

// Queue.prototype = {
//   // enqueued: function (value) {},
//   // dequeued: function () {},
//   //size: function () {return this.count;}
// };
Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  if (this.count) {
    this.count--;  
  }
  this.popped = this.storage['0'];
  delete this.storage['0'];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  return this.popped;
};

Queue.prototype.size = function() {
  return this.count;
};


