let _ = require('lodash');
let chalk = require('chalk');

console.log(chalk.blue('Hello') + 'World' + chalk.red('!'));

_.each([1,2,3], function(el, idx) {
  console.log(el);
});

console.log("hello world");


