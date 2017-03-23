var Logger = function() {
	this.log = function(msg, err) {
		err = err.toLowerCase();
		switch(err) {
			case "info":
				this.info(msg);
				break;
			case "warning":
				this.warning(msg);
				break;
			case "error":
				this.error(msg);
				break;
		}
	};
	this.info = function(msg) {
		console.log(chalk.blue(msg));
	};
	this.warning = function(msg) {
		console.log(chalk.yellow(msg));
	};
	this.error = function(msg) {
		console.log(chalk.red(msg));
	};
};

module.exports = Logger;