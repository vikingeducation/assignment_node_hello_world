var chalk = require('chalk');

module.exports = {
	log: function(msg, logLevel) {
		if (logLevel === 'info') {
			console.log(chalk.blue(msg))
		} else if (logLevel === 'warning') {
			console.log(chalk.yellow(msg))
		} else if (logLevel === 'error') {
			console.log(chalk.red(msg))
		} else {
			console.log('Please provide appropriate log level parameter!')
		}
	},

	info: function(msg) {
		console.log(chalk.blue(msg))
	},

	warning: function(msg) {
		console.log(chalk.yellow(msg))
	},

	error: function(msg) {
		console.log(chalk.red(msg))
	}
}