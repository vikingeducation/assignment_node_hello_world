const _chalk = require('chalk');
const _lodash = require('lodash');

var logger = require('./lib/logger');
var logs = require('./data/logs.json');

logger.log(logs[0].message, logs[0].level);

logger.info = function(msg){
  console.log(_chalk.blue(msg));
};

logger.error = function(msg){
  console.log(_chalk.red(msg));
};

logger.warning = function(msg){
  console.log(_chalk.yellow(msg));
};

logger.log("Logging message at the INFO level", "info");
logger.log("Logging message at the ERROR level", "error");
logger.log("Logging message at the WARNING level", "warning");

_lodash.each(logs, function(obj){
    logger.log(obj.message, obj.level);
  }
);


//Testing lodash and chalk
// var salutations = require('./lib/salutations');
//
// var arr = [1,2,3,4];
//
// _lodash.each(arr, function(elem){
//   console.log(elem);
// })
//
// _lodash.each(salutations, function(salutation){
//   console.log(salutation);
// });
//
// console.log(_chalk.blue('Hello') + " " + _chalk.red('world!'));
//
// console.log("Node.js says Hello world!");
