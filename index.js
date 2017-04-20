var chlk = require('chalk');
var _= require('lodash');
var jsn = require('./data/logs');
var logger = require('./lib/logger.js');


_.forEach(jsn,function(jsn){
  logger.log(jsn.message,jsn.level);
});

console.log("Hello World!");
