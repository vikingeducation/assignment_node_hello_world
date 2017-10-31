const _ = require('lodash');
const chalk = require('chalk')
const logs = require('./data/logs')
var logger = require('./lib/logger')
var arr = [1,2,3];

_.each(arr, function(number){

console.log(chalk.blue(number));
})
console.log(chalk.blue("Hello world!"));

_.each(logs, function(msg){
  logger.log(msg.message, msg.level );



})

logger.log("testing", "info")
logger.log("testing", "warning")
logger.log("testing", "error")
