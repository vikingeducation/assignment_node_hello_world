var _ = require('lodash');
var chalk = require('chalk');


console.log(chalk.bgBlue.white.bold("Hello world!"));	


arr = ["dog", "cat", "bear", "wolf", "penguin"];
_.each(arr, function(el) {
	console.log(el);
});