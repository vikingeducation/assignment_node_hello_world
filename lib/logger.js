const chalk = require('chalk');

const info = chalk.bold.blue;
const warning = chalk.bold.yellow;
const error = chalk.bold.red;

var logger = {
	log: function(message, level) {
		if (level === 'info') {
			console.log(info(message));
		} else if (level === 'warning') {
			console.log(warning(message));
		} else if (level === 'error') {
			console.log(error(message));
		}
	}
};

module.exports = logger;