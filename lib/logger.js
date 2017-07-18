var _ = require('lodash');
var chalk = require('chalk');

var logger = {
	log: function(message) {
		console.log(message);
	},

	info: function(string) {
		console.log(chalk.blue(string));
	},

	warning: function(parameter){
		console.log(chalk.yellow(parameter));
	},

	error: function(parameter) {
		console.log(chalk.red(parameter));
	},

}



module.exports = logger;