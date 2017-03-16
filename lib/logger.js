var chalk = require('chalk');

var logger = {
	log: function(message, type) {
		if (type == "info") {
			console.log(chalk.blue(message));
		} else if (type == "warning") {
			console.log(chalk.yellow(message));
		} else if (type == "error") {
			console.log(chalk.red(message));
		}
	},
	info: function(message) {
		logger.log(message, "info");
	},
	warning: function(message) {
		logger.log(message, "warning");
	},
	error: function(message) {
		logger.log(message, "error");
	}
}


module.exports = logger;