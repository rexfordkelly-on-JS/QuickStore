/*
  You don't even need to use this module to load the results, 
  just require it and Node will take care of the JSON parsing
  on it's own... very quick.
*/
// var messages = require('./data/messages.json');
  
/*
  It's also pretty simple to setup and access any number of 
  QuickStores. 
*/
    
// var QuickStore = require('./QuickStore.js');    
// var SDIR = __dirname + '/data';

/*
  With the optimizations i made, it's now super fast.
  checkout this block
*/

// var m = QuickStore( SDIR + '/messages.json');
// for( var i=0; i < 1000; i++){
// 	m.set('obj_'+i, {id: i});
// }
// m.save();

// You can also use it in fluent manor.
// var u = QuickStore( SDIR + '/users.json');
// u.set('User1', 'Rex Kelly').save();


/*
  There is also a couple other methods, such as
  get() and purge. Check out the code. it's pretty 
  simple.
*/
