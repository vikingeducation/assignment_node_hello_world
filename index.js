var chalk = require('chalk');
var _ = require('lodash');

console.log(chalk.blue('hey there'));

var colors = ['red', 'blue', 'green'];

_.each(colors, function(color){
  console.log(color);
})
