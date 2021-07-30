const chalk = require("chalk");

var logger = {
	log: function (message, level) {
		console.log(`Message logged at ${level} level: ${this[level](message)}`);
	},
	info: function (message) {
		return chalk.blue(message);
	},
	warning: function (message) {
		return chalk.yellow(message);
	},
	error: function (message) {
		return chalk.red(message);
	}
}

module.exports = logger;
