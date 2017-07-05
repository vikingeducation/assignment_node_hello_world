const chalk = require("chalk");

var logger = {
	log: function(message, level) {
		if (level === "warning") {
			logger.warning(message);
		} else if (level === "error") {
			logger.error(message);
		} else {
			logger.info(message);
		};
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

module.exports = logger