const chalk = require('../node_modules/chalk');

const log = function(message, level) {
	let lowerLevel = level.toLowerCase();

	switch(lowerLevel) {
		case "info":
			console.log(chalk.blue(message));
			break;
		case "warning":
			console.log(chalk.yellow(message));
			break;
		case "error":
			console.log(chalk.red(message));
			break;
		default:
			console.log("LOGGER ERROR - Invalid log level");
			break;
	}
}

module.exports = log;