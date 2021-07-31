const chalk = require("chalk");

var logger = {
	log: function (message, level) {
		console.log(`${this[level](message)}`);
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
