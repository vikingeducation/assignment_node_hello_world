const _ = require('lodash');
const chalk = require('chalk');
var testArray = [1,2,3,"..."];

console.log(chalk.red.bold('Hello World!'));

_.each(testArray, function(arrayItem){
  console.log(arrayItem + ' ');
});
