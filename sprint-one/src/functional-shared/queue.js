var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = { count: 0, storage: {}};
  result['dequeued'];
  extend(result, queueMethods);
  return result;
};

var extend = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

var queueMethods = {  
  enqueue: function (value) {
    this.storage[this.count] = value; 
    this.count++;
  },
  dequeue: function () {
    if (this.count) {
      this.count--;
    }
    this.dequeued = this.storage['0'];
    delete this.storage['0'];
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    
    return this.dequeued;
  },
  size: function () {
    return this.count;
  }
};

