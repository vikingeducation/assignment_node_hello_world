var chalk = require('chalk');
var _ = require('lodash');

console.log(chalk.red("Red text ayy"));
console.log(chalk.blue("Blue text ayy"));

_.each([1,2,3], function(x){ console.log(x*2)}).join(" | ");