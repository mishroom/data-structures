var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  someInstance.storage = {};
  someInstance.dequeued;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.count] = value; 
  this.count++;
};

queueMethods.dequeue = function () {
  if (this.count) {
    this.count--;
  }
  this.dequeued = this.storage['0'];
  delete this.storage['0'];
  for (var key in this.storage) {
    this.storage[key - 1] = this.storage[key];
  }
  
  return this.dequeued;
};
//edit test

queueMethods.size = function () {
  return this.count;
};



          