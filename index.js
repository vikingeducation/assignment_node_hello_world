const _ = require('lodash');
const chalk = require('chalk')
var logger = require('./lib/logger')
var arr = [1,2,3];

_.each(arr, function(number){

console.log(chalk.blue(number));
})
console.log(chalk.blue("Hello world!"));


logger.log("testing", "INFO")
logger.log("testing", "WARNING")
logger.log("testing", "ERROR")
