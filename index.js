console.log('hello world')

var _ = require('lodash');
var chalk = require('chalk');

console.log(chalk.blue('Hello World!'))


var simpleArray = ['red', 'green', 'blue']

_.each(simpleArray, function(str){
  console.log(str);
});
