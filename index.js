var chalk = require('chalk');
var _ = require('lodash');

console.log(chalk.blue('hello world'));

var myArray = [1,2,3,4,5,6];
_.each(myArray, function(i){
  console.log(chalk.green(i));
})