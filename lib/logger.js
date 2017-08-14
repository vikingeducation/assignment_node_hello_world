const chalk = require('chalk');

var logger = {
	log: function(message, level) {
		if('level' === 'info') {
			return console.log(chalk.blue(message));
		} else if('level' === 'warning') {
			return console.log(chalk.yellow(message));
		} else {
			return console.log(chalk.red(message));
		}
		return;
	}
		}	


module.exports = logger;