const _ = require('lodash');
const chalk = require('chalk')
const log = console.log;
var arr = [1,2,3]


_.each(arr, function(number){

log(chalk.blue(number));
})
log(chalk.blue("Hello world!"))