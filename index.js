var chlk = require('chalk');
var _= require('lodash');
var jsn = require('./data/logs')

_.forEach(jsn,function(jsn){
  console.log(chlk.green(jsn.level));
  console.log(chlk.blue(jsn.message));
});

console.log("Hello World!");
