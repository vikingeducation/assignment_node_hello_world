var chalk = require('chalk');
var _ = require('lodash');

console.log(chalk.blue("Chalk is working!"));

var numbers = [1, 2, 3];

_.each(numbers, function(num) {
	console.log("Next number is " + num);
});

