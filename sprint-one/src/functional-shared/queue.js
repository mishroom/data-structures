var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    counter : 0
  };
  var storage = {};
  
  console.log("before extend: ", someInstance);

  extend(someInstance, queueMethods);
  console.log("after extend: ", someInstance);
  return someInstance;
};

var queueMethods = {  

  enqueue : function () {
    this.counter ++;
  },

  dequeue : function () {
    this.counter --;
  },

  size : function () {
    this.counter;
    return this.counter;
  }
};

var extend = function (obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};

    
