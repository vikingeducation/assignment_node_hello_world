var chalk = require('chalk');
var _ = require('lodash');

var arr = [1,2,3,4,5];

_.forEach(arr, (item) => {
  console.log( chalk.yellow(item) );
});

console.log( chalk.blue('Hello World!') );

