const chalk = require('chalk');
const _ = require('lodash');

let words = {
	one: 'Hello world!',
	two: "Hi There!",
	three:"What\'s up?"
};

_.each(words, function (word) {
	// body... 
	console.log(chalk.red(word));
});