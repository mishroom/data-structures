var Stack = function(loc) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var result = {};

  result['count'] = 0;  
  result['storage'] = {};
  
  extend(result, stackMethods);
  return result;
};

function extend(obj, method) {
  for (var key in method) {
    obj[key] = method[key];  
  }
}


var stackMethods = {
  pop : function() {},
  push : function(value) {},
  size : function() {
    return 0;
  }
};

