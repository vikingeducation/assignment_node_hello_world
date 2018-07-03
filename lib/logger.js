 
var logger = {
	log: function(message, type) {
		if (type = "true") {
			console.log(_chalk.blue(message + "logged at info level"));
		} else if (type = "false") {
			console.log(_chalk.yellow(message + "logged at warning level"));
		} else if (type = "error") {
			console.log(_chalk.red(message + "logged at error level"));
	}}
};

module.exports = logger;
