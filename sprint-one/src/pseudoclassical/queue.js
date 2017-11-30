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
Queue.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.pop = function() {
  if (this.count) {
    this.count--;  
  }
  this.popped = this.storage['0'];
  delete 
};

Queue.prototype.size = function() {
  return this.count;
};


