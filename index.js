var _ = require('lodash');
var chalk = require('chalk');

console.log(chalk.red("hello world!"));

_.each(["hello", "hola", "merhaba", "ni hao"], function(greeting) {
  console.log(greeting);
});
