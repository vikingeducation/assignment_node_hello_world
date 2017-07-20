
const chalk = require('chalk');

function log (message, level){
	return message + " " + "logged at " + level
}

function info(message){
	const info = chalk.keyword('blue');
	console.log(info(message));
}

function warning(message){
	const warning = chalk.keyword('yellow');
	console.log(warning(message));
}

function error(message){
	const error = chalk.keyword('red');
	console.log(error(message));
}

module.exports = {log, info, warning, error};