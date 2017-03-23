var _ = require('lodash');
var chalk = require('chalk');
var myLoggerMessage = require('./lib/logger');
var myLogs = require('./data/logs');

_.each(myLogs, function(value){
  myLoggerMessage.log(value["message"], value["level"]);
});




/*var msg1 = "Information message",
    msg2 = "Warning message",
    msg3 = "Error message";

var level1 = "info",
    level2 = "warning",
    level3 = "error";*/

/*myLoggerMessage.log(msg1,level1);
myLoggerMessage.log(msg2,level2);
myLoggerMessage.log(msg3,level3);*/


/*
// testing Lodash
var testArray = [1,2,3,4,5,6];
_.each(testArray, function(value) {
  console.log(value);
});

// testing Chalk
console.log(chalk.bold.red('Error!'));
*/
