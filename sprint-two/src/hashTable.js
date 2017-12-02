var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //console.log("index: ", index);
  // this means there is nothing in the bucket index
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  } 
  // if the bucket index doesn't have an overall bucket, need
  // to add that bucket in
  // if there is, just set the new tuplet pairs in it
  if (this._storage.get(index).length) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index).splice(i, 1);
      }
    }
  }
  this._storage.get(index).push([k, v]); 
  // [[[a, b]]]
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //console.log('bucket in retrieve:', bucket);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      //console.log("bucket: ", bucket, "pair: ", bucket[i]);
      return bucket[i][1];
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log('storage:', this._storage.get(index), 'index:', index, 'k:', k);
  var result;
  // console.log(this._storage.get(index)[0][0]);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      //console.log(k);
      result = this._storage.get(index)[i][1];
      this._storage.get(index).splice(i, 1);
    }
    return result;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


