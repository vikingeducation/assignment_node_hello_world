var chalk = require('./node_modules/chalk');
var _ = require('./node_modules/lodash');

var simpleArray=["zero","one","two","three","four","five","six","seven","eight","nine","ten"]

console.log(chalk.blue('Hello world!'));

_(simpleArray).forEach(function(n) {
  console.log(n);
});
// => logs each value from left to right and returns the array