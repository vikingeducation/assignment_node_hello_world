var chalk = require('chalk');

var logger = {
	log: function(message, level) {

		if (level === 'info') {

			console.log(chalk.blue(message));
		
		} else if (level === 'warning') {

			console.log(chalk.yellow(message));

		} else if (level === 'error') {

			console.log(chalk.red(message));

		} 
	},



	info: function(message) {

		console.log(chalk.blue(message));
	},

	warning: function(message) {

		console.log(chalk.yellow(message));
	},

	error: function(message) {

		console.log(chalk.red(message));

	}

};

module.exports = logger;