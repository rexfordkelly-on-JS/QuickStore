/**
    A simple Utility to provide performent
    JSON data storage.
*/

var fs = require('fs');
/*
    While it is possible to write files to Disc in an 
    Async menor, it becomes an issue, when your trying
    to maintain consistancy and data integrity.
*/
function QuickStore(path) {
  this.path = path;
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
  this.QuickStore = require(path);
}

/*
   JSON can not contain ciclic references
   nor functions. So we use our JSON JSONClone 
   method to enforce this on retrieval.

   - will return an empty array, if nothing is found to
     keep inline with pure functions.
*/
QuickStore.prototype.get = function(key) {
  if (!key) return JSONClone(this.QuickStore);
  if (!this.QuickStore[key]) return [];
  return JSONClone(this.QuickStore[key]);
}

/*
  Because we want to make this as fast as possible
  All operations will take place on an in memory 
  copy of the file store.
*/
QuickStore.prototype.set = function(key, value) {
  this.QuickStore[key] = JSONClone(value);
  return this;
}
/*
  Because we want to make this as fast as possible
  All operations will take place on an in memory 
  copy of the file store.
*/
QuickStore.prototype.del = function(key) {
  delete this.QuickStore[key];
  return this;
}

/*
  Part of making QuickStore fast is to delay
  persistance for as long as possible, the 
  developer will need to explixitly call save
  to persist data.
*/
QuickStore.prototype.save = function() {
  fs.writeFileSync(this.path, JSON.stringify(this.QuickStore));
  return this;
}

/*
  Clear out the entire Store.
*/
QuickStore.prototype.purge = function() {
  this.QuickStore = {};
  this.save();
}

/*
  Simple JSON enforcment.
*/
function JSONClone(data) {
  return JSON.parse(JSON.stringify(data));
}

module.exports = function(path) {
  return new QuickStore(path);
}