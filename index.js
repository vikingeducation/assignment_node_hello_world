

var chalk = require('chalk');

var _ = require('lodash');


console.log(chalk.red('Hello ')+ chalk.blue('World!'));

var arr = [1,2,3,4,5];

_.each(arr, function(arr) {
	console.log(arr);
});